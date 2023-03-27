import React, { createContext, useState } from 'react'

const AuthContext = createContext({});


//children are all the nested components in the authprovider in the index
export const AuthProvider = ( {children}) => {
const [auth, setAuth] = useState({})

return (
    <AuthContext.Provider value={{auth, setAuth}}>
        {children}
    </AuthContext.Provider>)

}

export default AuthContext