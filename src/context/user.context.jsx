import { createContext, useState } from "react";


//actual value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser:()=>null,
});



// component that will wrap around any other 
// components that want access to the values inside of context
export const UserProvider =({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    const value= {currentUser, setCurrentUser}

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}