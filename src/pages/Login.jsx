import {  useState } from "react";
import Input from "../components/Input";
import {  useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",        
    });
    const [error, setError] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setError({ ...error, [e.target.name]: '' })
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (form.email === '') {
            setError(prev => ({ ...prev, email: "Please Enter email" }))
            return
        }
        if (form.password === '') {
            setError(prev => ({ ...prev, password: "Please Enter password" }))
            return
        }

        try {
            await signInWithEmailAndPassword(auth, form.email, form.password);
            navigate("/home");
        } catch (err) {
            console.log(";aksd;a")
            alert(err.message);
        }
    };


    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-4">
                <div className="card shadow p-4">
                    <h2 className="text-center mb-4 fw-bold">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <Input
                                label="Email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                type="text"
                                required
                            />
                            <p className="text-danger"><small>{error.email}</small></p>
                        </div>
                        <div className="mb-4">
                            <Input
                                label="Password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                type="password"
                                required
                            />
                            <p className="text-danger"><small>{error.password}</small></p>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Login
                        </button>
                    </form>

                    <button type="button" className="signup-btn" onClick={() => navigate('/signup')}>
                        Don't have an account? <span>Sign up</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
