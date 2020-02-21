import { UserAtionTypes } from './user.types';

export const setCurrentUser=user=>({
    type: UserAtionTypes.SET_CURRENT_USER,
    payload: user
});