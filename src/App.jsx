
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import "./App.css";
import Signup from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import VerifyEmail from "./components/VerifyEmail.jsx";

function App() {
  // const haveToken = localStorage.getItem('token')
  return (
    <Routes>
      {/* <Route path={'/'} element={!haveToken ? <MainLayout/> : <Navigate to={'/home'}/>}> */}
      <Route path={'/'} element={<MainLayout />}>
        <Route path={'Signup'} element={<Signup />} />
        <Route index element={<Login />} />
      </Route>


        {/* <Route path="/home" element={haveToken ? <Home/> : <Navigate to={'/'}/> }/> */}
        <Route path={"/home"} element={<VerifyEmail><Home /></VerifyEmail>} />
        <Route path="/update-profile" element={<Profile />} />

    </Routes>
  );
}

export default App;
