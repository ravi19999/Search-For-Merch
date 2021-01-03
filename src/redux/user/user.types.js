export const UserActionTypes = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
    GOOGLE_SIGN_IN_START: "GOOGLE_SIGN_IN_START",
    GOOGLE_SIGN_IN_SUCCESS: "GOOGLE_SIGN_IN_SUCCESS",
    GOOGLE_SIGN_IN_FAILURE: "GOOGLE_SIGN_IN_FAILURE",
    EMAIL_SIGN_IN_START: "EMAIL_SIGN_IN_START",
    EMAIL_SIGN_IN_SUCCESS: "EMAIL_SIGN_IN_SUCCESS",
    EMAIL_SIGN_IN_FAILURE: "EMAIL_SIGN_IN_FAILURE",
};

export const googleSignStart = () => ({
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
