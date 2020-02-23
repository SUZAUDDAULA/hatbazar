import { createSelector } from 'reselect';

const selectuser=state =>state.user;

const selectCart= state => state.cart;

export const selectCurrentUser=createSelector(
    [selectuser],
    user=>user.currentUser
)