import { Outlet } from "react-router-dom"
import Topbar from "../components/Topbar"

const MainLayout = ()=>{
    return(
        <div className="position-relative">
            {/* <img className="background-image" src="background-image.jpg" alt="" /> */}
             <div className="background-image"></div>
            <Topbar/>    
            <Outlet/>
        </div>
    )
}

export default MainLayout