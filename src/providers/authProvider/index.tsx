"use client";
import API from "../../utils/axiosInstance";
import React, { useReducer } from "react";
import { AuthStateContext, IAuthContextType, INITIAL_STATE } from "./context";
import { AuthReducer } from "./reducer";
import * as actions from "./actions";

interface AuthProviderProps {
    children: React.ReactNode;
}
interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

interface ProfileResponse {
  name: string;
  email: string;
}
/**
 * Uses the reducer to manage state
 * Defines async functions (login, registerm logout) that"
 * - dispatch the correct actions
 * - make API calls
 * - handle success/error transitions
 * Provides value={{...state, login, register, logout}} to the app
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
 
    const login = async (email: string, password: string) => {
        dispatch(actions.loginPending());
        try {
            const response = await API.post<LoginResponse>('/auth/login', { email, password });
            const { access_token, refresh_token } = response.data;

            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);

            const profileRes = await API.get<ProfileResponse>('/auth/profile');
            const {name, email: profileEmail} = profileRes.data;

            dispatch(actions.loginSuccess({
                token: access_token,
                user: {name, email: profileEmail}
            }));
        } catch(error){
            console.error("Login error", error);
            dispatch(actions.loginError());
        }
    };
    const register = async (name: string, email: string, password: string) => {
        dispatch(actions.registerPending());
        try{
            const avatar = `https://api.dicebear.com/6.x/initials/svg?seed=${name}`;

            const response = await API.post('/users', {name, email, password, avatar});
            if(response.status === 201){
                await login(email, password); //auto login?? remove
            } else {
                dispatch(actions.registerError());
            }
        } catch (error) {
            console.log("Register error: ", error);
            dispatch(actions.registerError());
        }
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        dispatch(actions.logout());
    };
    const contextValue: IAuthContextType = {
        ...state,
        login,
        register,
        logout,
    };

    return(
        <AuthStateContext.Provider value={contextValue}>
            {children}
        </AuthStateContext.Provider>
    )
}