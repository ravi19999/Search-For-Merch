import UserActionTypes from "./user.types";

export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
});

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (user) => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user,
});

export const googleSignInFailure = (error) => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error,
});
export const emailSiginStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
});

export const emailSignInSuccess = () => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
});

export const emailSignInFailure = (error) => ({
    type: UserActionTypes.Email_SIGN_IN_FAILURE,
    payload: error,
});
