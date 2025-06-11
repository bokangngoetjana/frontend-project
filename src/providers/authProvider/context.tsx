import {createContext} from "react";

//interface representing the data structure from fakestoreapi for register/login
export interface IUser {
    username: string;
    password: string;
}
//interface defining the state shape for our context
export interface IAuthStateContext {
    isAuthenticated: boolean;
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    token?: string;
    user? : {
        username: string;
        email: string;
    };
}
export const INITIAL_STATE: IAuthStateContext = {
    isAuthenticated: false,
    isPending: false,
    isSuccess: false,
    isError: false,
    token: undefined,
    user: undefined
}

//holds the method to interact with the user??
export const AuthStateContext = createContext<IAuthStateContext>(INITIAL_STATE);