import { useContext } from "react";
import { authContext } from "../context/authContext";
import { sendEmailVerification } from "firebase/auth";

const VerifyEmail = ({ children }) => {
    const { userData } = useContext(authContext)
    const handleEmailVerification = async () => {
        try {
            await sendEmailVerification(userData);
            alert("Verification email sent! Check your inbox.");
        } catch (error) {
            console.error("Error sending verification email:", error);
        }
    }


    return (
        <div>
            {userData.emailVerified ?
                children :
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <button className="update-btn" onClick={handleEmailVerification}>Verify Email</button>
                </div>
            }

        </div>
    );
};

export default VerifyEmail;
