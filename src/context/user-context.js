import React, { useContext, useState,useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const UserContext = React.createContext()

export const UserProvider = ({children}) =>{


    const {user,logout,loginWithRedirect} = useAuth0();
    const [myUser,setMyUser] = useState(null)


    useEffect(() => {
       setMyUser(user)
    }, [user])

    return(
        <UserContext.Provider value={{
            myUser,
            logout,loginWithRedirect
            }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () =>{
    return useContext(UserContext)
}


//User@test.com - email
//User@123 - password
//Adi - name