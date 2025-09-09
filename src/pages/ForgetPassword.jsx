import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const ForgetPassword = () => {    
    const navigate = useNavigate();
    const [isLoading,setIsLoading] = useState(false);

    const handleForgetPassword = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        try {
            setIsLoading(true);
            await sendPasswordResetEmail(auth, email, {
                url: "http://localhost:5173/" 
            });
            alert("Password reset email sent! Check your inbox.");
            
            setIsLoading(false);
            navigate('/')
        } catch (error) {
            console.error("Error sending reset email:", error.code, error.message);
            alert(error.message);
            setIsLoading(false);
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-4">
                <div className="card shadow p-4">
                    <h2 className="text-center mb-4 fw-bold">Forget Password</h2>
                    <form onSubmit={handleForgetPassword}>
                        
                        <div className="mb-4">
                            <Input
                                label="Email"
                                name="email"
                                // value={form.password}
                                // onChange={handleChange}
                                placeholder="Enter your email"
                                type="email"
                                required
                            />                            
                        </div>
                        
                        <button type="submit" className="btn btn-primary w-100">
                            {isLoading ? "Loading...." : "Send reset link"}
                        </button>
                    </form>

                    <button type="button" className="signup-btn" onClick={() => navigate('/')}>
                        navigate to login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
