import { createContext } from "react";
import { createAction } from "redux-actions";
import { IAuthStateContext } from "./context";

export enum AuthActionEnums {
    loginPending = "LOGIN_PENDING",
    loginSuccess = "LOGIN_SUCCESS",
    loginError = "LOGIN_ERROR",

    //logout???
    logout = "LOGOUT",

    registerPending = "REGISTER_PENDING",
    registerSuccess = "REGISTER_SUCCESS",
    registerError = "REGISTER_ERROR"
}
export const loginPending = createAction<IAuthStateContext>(
    AuthActionEnums.loginPending, 
    () => ({isPending: true, isSuccess: false, isError: false, isAuthenticated: false})
);
export const loginSuccess = createAction<IAuthStateContext, {token: string; user: {username: string; email: string;}}>(
    AuthActionEnums.loginSuccess,
    ({ token, user }) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        isAuthenticated: true,
        token,
        user
    })
);
export const loginError = createAction<IAuthStateContext>(
    AuthActionEnums.loginError, () => ({isPending: false, isSuccess: false, isError: true, isAuthenticated: false})
);
export const registerPending = createAction<IAuthStateContext>(
    AuthActionEnums.registerPending, () => ({isPending: true, isSuccess: false, isError: false, isAuthenticated: false})
);
export const logout = createAction<IAuthStateContext>(
    AuthActionEnums.logout, () => ({
        isPending: false,
        isSuccess: false,
        isError: false,
        isAuthenticated: false,
        token: undefined,
        user: undefined
    })
);
export const registerSuccess = createAction<IAuthStateContext, { token: string; user: {username: string; email: string;}}>(
  AuthActionEnums.registerSuccess,
  ({ user, token }) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    isAuthenticated: true,
    token,
    user
  })
);

export const registerError = createAction<IAuthStateContext>(
  AuthActionEnums.registerError,
  () => ({ isPending: false, isSuccess: false, isError: true, isAuthenticated: false })
);