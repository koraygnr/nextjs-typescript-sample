import React, { createContext, ReactNode } from "react";
import { userType } from "@/types/types";
import useFetch from "@/customHooks/useFetch";

interface IUsersContext {
    users: userType[],
    isLoading: boolean;
}

interface IUsersContextProviderProps {
    children : ReactNode
}

let initialState : any

const UsersContext = createContext<IUsersContext>(initialState)

export const UsersContextProvider = ({children}:IUsersContextProviderProps) => {
    // customHooks (UseFetch)
    const { data, isLoading } = useFetch("users")
    const users = data
   

    return (
        <UsersContext.Provider value={{ users, isLoading }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContext