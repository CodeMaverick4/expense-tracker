import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { authContext } from "../context/authContext";

const Home = () => {
  const navigate = useNavigate();
  const { userData, handleLogout } = useContext(authContext)
  return (
    <div className="p-3 border-bottom border-black d-flex justify-content-between align-items-center ">
      <h2>  Welcome to expense Tracker</h2>
      <div>
        <span onClick={() => navigate('/update-profile')} className="px-3 py-1 rounded-4 cursor-pointer" style={{ backgroundColor: '#E8DADC' }}>Your Profile is incomplete. <span style={{ color: '#6041D5' }}>Complete now</span></span>
        {userData && <button className='btn btn-danger ms-3' onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  )
}

export default Home