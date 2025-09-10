import { useContext, useState } from "react";
import { authContext } from "../context/authContext";
import { sendEmailVerification } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from "../firebase";

const VerifyEmail = ({ children }) => {
    const [refresh, setRefresh] = useState(false);
    // const { userData } = useContext(authContext);
    const userData = useSelector(state => state.auth.user);
    // console.log(userData)

    const handleEmailVerification = async () => {
        
            try {
                if (!auth.currentUser) {
                    alert("No logged-in user found.");
                    return;
                }
                await sendEmailVerification(auth.currentUser);
                alert("Verification email sent! Check your inbox.");
                setRefresh(true);
            } catch (error) {
                console.error("Error sending verification email:", error);
            }
        }

    const handleRefresh = async () => {
            try {
                if (auth.currentUser) {
                    await auth.currentUser.reload();
                    console.log("Updated user:", auth.currentUser);
                }
            }
            catch (err) {
                alert(err.message)
            }
        }

        return (
            <div>
                {userData.emailVerified ?
                    children :
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                        {refresh ? <button className="update-btn" onClick={handleRefresh}>Refresh</button> :
                            <button className="update-btn" onClick={handleEmailVerification}>Verify Email</button>}

                    </div>
                }

            </div>
        );
    };

    export default VerifyEmail;
