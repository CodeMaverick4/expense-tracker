import { useContext } from "react"
import { authContext } from "../context/authContext"
import { Navigate } from "react-router-dom"
import VerifyEmail from "./VerifyEmail"

const IsLoggedIn = ({children})=>{
    const {userData} = useContext(authContext)
    return(
        userData ? <VerifyEmail>{children}</VerifyEmail>: <Navigate to={"/"} /> 
    )
}

export default IsLoggedIn