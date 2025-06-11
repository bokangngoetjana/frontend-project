import { handleActions } from "redux-actions";
import { INITIAL_STATE, IAuthStateContext } from "./context";
import { AuthActionEnums } from "./actions";

export const AuthReducer = handleActions<IAuthStateContext, IAuthStateContext>({
    [AuthActionEnums.loginPending] : (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.loginSuccess] : (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.loginError] : (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.logout] : (state, action) => ({
        ...INITIAL_STATE
    }),
    [AuthActionEnums.registerPending] : (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.registerSuccess] : (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [AuthActionEnums.registerError] : (state, action) => ({
        ...state,
        ...action.payload,
    })
}, INITIAL_STATE)