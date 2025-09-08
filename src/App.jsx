
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import "./App.css"
import Signup from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
        <Route path={'Signup'} element={<Signup/>} />
        <Route index element={<Login/>} />
      </Route>
    </Routes>
  );
}

export default App;
