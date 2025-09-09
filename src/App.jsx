
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import "./App.css";
import Signup from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import VerifyEmail from "./components/VerifyEmail.jsx";
import IsLoggedIn from "./components/isLoggedIn.jsx";
import ForgetPassword from "./pages/forgetPassword.jsx";

function App() {
  // const haveToken = localStorage.getItem('token')
  return (
    <Routes>

      <Route path={'/'} element={<MainLayout />}>
        <Route path={'Signup'} element={<Signup />} />
        <Route index element={<Login />} />
        <Route path={"/forget-password"} element={<ForgetPassword />} />
      </Route>

      <Route path={"/home"} element={<IsLoggedIn><Home /></IsLoggedIn>} />
      <Route path="/update-profile" element={<IsLoggedIn><Profile /></IsLoggedIn>} />

      <Route path="*" element={<p>route not exist</p>} />
    </Routes>
  );
}

export default App;
