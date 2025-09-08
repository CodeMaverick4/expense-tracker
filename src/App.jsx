
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import "./App.css"
import Signup from "./pages/SignUp.jsx";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
        <Route index element={<Signup/>} />
      </Route>
    </Routes>
  );
}

export default App;
