import { createContext, useState } from "react";

export let IsAuth = createContext(false)

const AuthProvider = ({children}) => {

    let [auth, setAuth] = useState(false)

    return (
        <IsAuth.Provider value={{auth, setAuth}} >
            {children}
        </IsAuth.Provider>
    )
}

export default AuthProvider