import { useNavigate } from "react-router-dom"

const Home = ()=>{
    const navigate = useNavigate();
    return(
        <div className="p-3 border-bottom border-black d-flex justify-content-between align-items-center ">
          <h2>  Welcome to expense Tracker</h2>
          <span onClick={()=>navigate('/update-profile')} className="px-3 py-1 rounded-4 cursor-pointer" style={{backgroundColor:'#E8DADC'}}>Your Profile is incomplete. <span style={{color:'#6041D5'}}>Complete now</span></span>
        </div>
    )
}

export default Home