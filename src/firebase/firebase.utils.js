import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyBzz9m1j2lnZpKpzeWFC1gDttk6_sFXewI",
    authDomain: "hatbazar-643db.firebaseapp.com",
    databaseURL: "https://hatbazar-643db.firebaseio.com",
    projectId: "hatbazar-643db",
    storageBucket: "hatbazar-643db.appspot.com",
    messagingSenderId: "912119935674",
    appId: "1:912119935674:web:f3c3877fac083b9d5c8883",
    measurementId: "G-HTNKZWRCLG"
  };

  export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if(!userAuth) return;

    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot =await userRef.get();
    
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;