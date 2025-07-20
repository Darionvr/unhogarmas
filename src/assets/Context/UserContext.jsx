import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router'


export const UserContext = createContext()

const UserProvider = ({ children }) => {

    const [token, setToken] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)
    const navigate = useNavigate();

    const logout = () => {
        setToken(null);
    }

    const login = async (email, password) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Login error:", errorData);
                return false;
            }

            const data = await response.json();

            setToken(data.token);
            setCurrentUser(data.user)
            navigate('/Myprofile');
            return data

        } catch (error) {
            console.error("Network or unexpected error:", error);
            setToken(null);
            return false;
        }
    };

    const register = async (registerForm) => {

        try {
            const formData = new FormData();
            formData.append("first_name", registerForm.first_name);
            formData.append("last_name", registerForm.last_name);
            formData.append("email", registerForm.email);
            formData.append("password", registerForm.password);
            formData.append("rut", registerForm.rut);
            if (registerForm.photo) {
                formData.append("photo", registerForm.photo);
            }

            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/register`, {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            console.log("Respuesta del registro:", data);

            if (!response.ok) {
                console.error("Registro fallido:", data.message);
                return false;
            }

            if (data.token && data.user) {
                setToken(data.token);
                setCurrentUser(data.user);
                navigate('/Myprofile');
                return data;
            } else {
                console.error("Faltan datos en la respuesta del backend");
                return false;
            }

        } catch (error) {
            console.error("Error en el registro:", error);
            setToken(null);
            return false;
        }
    };

    return (
        <UserContext.Provider value={{
            token, setToken, login, logout, register, currentUser, setCurrentUser
        }}>

            {children}
        </UserContext.Provider>
    )

}

export default UserProvider