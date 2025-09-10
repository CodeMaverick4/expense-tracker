import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/authSlicer';
import expenseReducer from "./slice/expenseSlicer";

const store = configureStore({
    reducer:{
        auth:authReducer,
        expenses: expenseReducer
    }
});

export default store