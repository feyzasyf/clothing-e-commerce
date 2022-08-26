import { createContext, useState, useEffect } from "react";
import {onAuthStateChangedListener,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils"

//actual value we want to access
//context needs initial value
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser:()=>null,
});



// component that will wrap around any other 
// components that want access to the values inside of context
export const UserProvider =({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    const value= {currentUser, setCurrentUser}

   
    useEffect(()=>{
     const unsubscribe = onAuthStateChangedListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user);
        }

        setCurrentUser(user)})
    
          
     return unsubscribe;
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}