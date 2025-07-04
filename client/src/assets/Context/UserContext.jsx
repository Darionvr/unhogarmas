import React, { createContext, useState } from 'react'


export const UserContext = createContext()

const UserProvider = ({ children }) => {


    const [userName, setUsername] = useState(null)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [token, setToken] = useState(false)

    const logout = () => {
        setToken(false);
     
    }

    const login = async () => {
    try {
        const response = await fetch('/TestUsuarios.json');
        const users = await response.json();
        const found = users.find(
            user => user.email === email && user.password === password
        );
        if (found) {
            setToken(true);
            setUsername(found.email); 
            return true;
        } else {
            setToken(false);
            return false;
        }
    } catch (error) {
        setToken(false);
        return false;
    }
};

    return (
        <UserContext.Provider value={{
            userName, setUsername, password, setPassword, email, setEmail, token, setToken, login, logout
        }}>

            {children}
        </UserContext.Provider>
    )

}

export default UserProvider