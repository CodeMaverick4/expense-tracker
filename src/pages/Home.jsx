import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { authContext } from "../context/authContext";
import Input from "../components/Input";

const Home = () => {
  const navigate = useNavigate();
  const { userData, handleLogout } = useContext(authContext)
  return (
    <>
      <div className="p-3 border-bottom border-black d-flex justify-content-between align-items-center ">
        <h2>  Welcome to expense Tracker</h2>
        <div>
          <span onClick={() => navigate('/update-profile')} className="px-3 py-1 rounded-4 cursor-pointer" style={{ backgroundColor: '#E8DADC' }}>Your Profile is incomplete. <span style={{ color: '#6041D5' }}>Complete now</span></span>
          {userData && <button className='btn btn-danger ms-3' onClick={handleLogout}>Logout</button>}
        </div>
      </div>

      {/* <div className="d-flex flex-column align-items-center mt-5"> */}
      <div className="container mt-5">
        <div className="d-flex align-items-center gap-3 w-75 mx-auto">
          <Input
            label="Expense Amount"
            name="expenseAmount"
            // value={form.password}
            // onChange={handleChange}
            placeholder="Enter your amount"
            type="text"
            required
          />

          <Input
            label="Expense Amount"
            name="expenseAmount"
            // value={form.password}
            // onChange={handleChange}
            placeholder="Enter your amount"
            type="text"
            required
          />

          <Input
            label="Expense Amount"
            name="expenseAmount"
            // value={form.password}
            // onChange={handleChange}
            placeholder="Enter your amount"
            type="text"
            required
          />

          <select name="" id="" className="expense-select">
            <option value="food">Food</option>
            <option value="petrol">Pertol</option>
            <option value="shopping">Shopping</option>
          </select>
          <div className="text-nowrap">
            <button className="update-btn">Add Expense</button>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center">
          {/* card  */}
          <div className="d-flex rounded-3 border border-white py-3 px-4 text-white w-50 my-5 bg-black">
            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-5 mb-3">
                <h4>Rs. 500</h4>
                <span className="rounded-4" style={{ padding: '3px 15px', backgroundColor: 'purple' }}>Food</span>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio et ut magni.</p>
            </div>
            <div className="d-flex align-items-center gap-3 justify-content-center fs-3" style={{ width: '15%' }}>
              <i class="bi bi-pencil-square cursor-pointer"></i>
              <i class="bi bi-trash-fill cursor-pointer"></i>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Home