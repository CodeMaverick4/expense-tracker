import { useContext } from "react"
import { authContext } from "../context/authContext"
import { Navigate } from "react-router-dom"

const IsLoggedIn = ({children})=>{
    const {userData} = useContext(authContext)
    return(
        userData ? children: <Navigate to={"/"} /> 
    )
}

export default IsLoggedIn