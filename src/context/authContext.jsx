import { createContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const authContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [isLoading,setIsLoading] = useState(false);
    
    const handleLogin = async (form) => {
        if (userData) return;
        if(isLoading) return;
        try {
            setIsLoading(true);
            const res = await signInWithEmailAndPassword(auth, form.email, form.password);
            const user = res.user
            const token = await res.user.getIdToken();

            setUserData(user);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            navigate("/home");
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            alert(err.message);
        }
    }

    const handleLogout = async () => {
        if (!userData) return;
        try {
            await signOut(auth);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setUserData(null);
        } catch (err) {
            alert(err.message);
        }
    }


    return (
        <authContext.Provider value={{ isLoading,userData, setUserData, handleLogin,handleLogout }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContextProvider