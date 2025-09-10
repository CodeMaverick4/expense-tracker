import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

import Input from "../components/Input";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/slice/authSlicer'
import { setExpenses } from "../redux/slice/expenseSlicer";

const Home = () => {
  const navigate = useNavigate();
  
  const userData = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  
  const [expenseForm, setExpenseForm] = useState({ amount: "", description: "", category: "" });
  // const [expenses, setExpenses] = useState([]);
  const expenses = useSelector(state=>state.expenses.expenses)
  const [isLoading, setIsLoading] = useState(false);
  const [isAddingExpense, setIsAddingExpense] = useState(false);
  const [editExpense, setEditExpense] = useState(null);

  const handleChange = (e) => {
    setExpenseForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleAddExpense = async () => {
    if (expenseForm.amount === '' || expenseForm.description === "" || expenseForm.category === "") {
      alert("Please fill all the values..")
      return
    }
    if (isAddingExpense) return
    try {
      setIsAddingExpense(true);
      if (editExpense) {
        const res = await axios.put(`https://todo-app-75d12-default-rtdb.firebaseio.com/expenses/${editExpense}.json`, expenseForm,
          {
            headers: {
              "Content-Type": "application/json"
            }
          });
      } else {
        const res = await axios.post("https://todo-app-75d12-default-rtdb.firebaseio.com/expenses.json", expenseForm,
          {
            headers: {
              "Content-Type": "application/json"
            }
          });
      }
      setExpenseForm({ amount: "", description: "", category: "" });
      await loadExpenses();
      setIsAddingExpense(false);
      setEditExpense(false);
    } catch (err) {
      alert(err.message);
      setIsAddingExpense(false);
    }
  }

  const deleteExpense = async (id) => {
    try {
      const res = await axios.delete(`https://todo-app-75d12-default-rtdb.firebaseio.com/expenses/${id}.json`);
      await loadExpenses()
    } catch (err) {
      alert(err.message)
    }
  }
  const loadExpenses = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("https://todo-app-75d12-default-rtdb.firebaseio.com/expenses.json");

      const expensesArr = []
      for (let key in res.data) {
        expensesArr.push({ key: key, ...res.data[key] });
      }
      // setExpenses(expensesArr);
      dispatch(setExpenses(expensesArr))
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      alert(err.message);
    }
  }

  const handleEditExpense = (expense) => {
    setExpenseForm({ amount: expense.amount, description: expense.description, category: expense.category });
    setEditExpense(expense.key);
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  useEffect(() => {
    loadExpenses();
  }, [])
  return (
    <>
      <div className="p-3 border-bottom border-black d-flex justify-content-between align-items-center ">
        <h2>  Welcome to expense Tracker</h2>
        <div>
          <span onClick={() => navigate('/update-profile')} className="px-3 py-1 rounded-4 cursor-pointer" style={{ backgroundColor: '#E8DADC' }}>Your Profile is incomplete. <span style={{ color: '#6041D5' }}>Complete now</span></span>
          {userData && <button className='btn btn-danger ms-3' onClick={handleLogout}>Logout</button>}
        </div>
      </div>

      <div className="container mt-5">
        <div className="d-flex align-items-center gap-3 w-75 mx-auto">
          <Input
            label="Expense Amount"
            name="amount"
            value={expenseForm.amount}
            onChange={handleChange}
            placeholder="Enter your amount"
            type="text"
            required
          />

          <Input
            label="Description"
            name="description"
            value={expenseForm.description}
            onChange={handleChange}
            placeholder="Enter your amount"
            type="text"
            required
          />

          <select className="expense-select" onChange={handleChange} value={expenseForm.category} name="category">
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="petrol">Pertol</option>
            <option value="shopping">Shopping</option>
            <option value="other">Other</option>
          </select>
          <div className="text-nowrap">
            <button className="update-btn" onClick={handleAddExpense}>{isAddingExpense ? "Loading..." : editExpense ? "Edit Expense" : "Add Expense"}</button>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center gap-3 my-5">
          {/* card  */}
          {isLoading && <p>Loading... Expenses</p>}
          {expenses.length === 0 && <p>No expenses to show ...</p>}
          {!isLoading && expenses.length > 0 && expenses.map(expense =>
            <div key={expense.key} className="d-flex rounded-3 border border-white py-3 px-4 text-white w-50  bg-black">
              <div className="flex-grow-1">
                <div className="d-flex align-items-center gap-5 mb-3">
                  <h4>Rs. {expense.amount}</h4>
                  <span className="rounded-4" style={{ padding: '3px 15px', backgroundColor: 'purple' }}>{expense.category}</span>
                </div>
                <p>{expense.description}</p>
              </div>
              <div className="d-flex align-items-center gap-3 justify-content-center fs-3" style={{ width: '15%' }}>
                <i className="bi bi-pencil-square cursor-pointer" onClick={() => handleEditExpense(expense)}></i>
                <i className="bi bi-trash-fill cursor-pointer" onClick={() => deleteExpense(expense.key)}></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Home