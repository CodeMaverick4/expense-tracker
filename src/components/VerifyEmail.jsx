import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const VerifyEmail = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("User:", currentUser);
        });

        return () => unsubscribe();
    }, []);

    console.log(user)
    return (
        <div>
            {user.emailVerified ?
                children :
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <button className="update-btn" onClick={() => user.sendEmailVerification()}>Verify Email</button>
                </div>
            }
            {/* {user.} */}
            {/* {user ? (
                user.emailVerified
                    ? <p>Email verified </p>
                    : <button onClick={() => user.sendEmailVerification()}>Verify Email</button>
            ) : (
                <p>Loading user...</p>
            )} */}
        </div>
    );
};

export default VerifyEmail;
