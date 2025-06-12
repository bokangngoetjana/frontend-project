import {createContext} from "react";

//interface representing the data structure
export interface IUser {
    name: string;
    email: string;
}
//state only
//interface defining the state shape for our context
export interface IAuthStateContext {
    isAuthenticated: boolean;
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    token?: string;
    user? : IUser;
}
//defines what actions must do (login/register/logout)
export interface IAuthActions{
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
}

// NEW: combine state and actions
export type IAuthContextType = IAuthStateContext & IAuthActions;

export const INITIAL_STATE: IAuthStateContext = {
    isAuthenticated: false,
    isPending: false,
    isSuccess: false,
    isError: false,
    token: undefined,
    user: undefined,
}

// NEW: use correct combined type
export const AuthStateContext = createContext<IAuthContextType>({
    ...INITIAL_STATE,
    login: async () => {},
    register: async () => {},
    logout: () => {},
});

//holds the method to interact with the user??
