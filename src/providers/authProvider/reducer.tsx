import { handleActions } from "redux-actions";
import { INITIAL_STATE, IAuthStateContext } from "./context";
import { AuthActionEnums } from "./actions";

/**state transition logic
 * Uses handleAction to define how to respond to each action and update the state
 * 'this connects the dots between "I clicked login - here's how state changes"
 */
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
    //reset to initial state when you logout
    [AuthActionEnums.logout] : () =>
        INITIAL_STATE,

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