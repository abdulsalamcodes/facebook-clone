import React, {createContext, useContext, useReducer} from 'react'
export const UserContext = createContext();

function UserContextProvider({reducer, initialState, children}) {
    return (
        <UserContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

export const useStateValue = () => useContext(UserContext);
