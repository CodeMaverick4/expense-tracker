import { createContext, useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
export const authContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(localStorage.getItem('user') || null);

    const handleLogin = async (form) => {
        if (userData) return;
        try {
            const res = await signInWithEmailAndPassword(auth, form.email, form.password);
            const user = res.user
            const token = await res.user.getIdToken();

            setUserData(user);
            localStorage.setItem('user', user);

            localStorage.setItem('token', token);
            navigate("/home");
        } catch (err) {
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
        <authContext.Provider value={{ userData, setUserData, handleLogin,handleLogout }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContextProvider