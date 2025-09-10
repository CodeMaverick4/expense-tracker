import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const IsLoggedOut = ({children})=>{
    // const {userData} = useContext(authContext)
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
    console.log(isLoggedIn)
    return(
        isLoggedIn ?  <Navigate to={"/home"} /> :children
    )
}

export default IsLoggedOut