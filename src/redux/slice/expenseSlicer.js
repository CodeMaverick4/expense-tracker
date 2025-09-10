import { createSlice } from "@reduxjs/toolkit";

const expenseSlicer = createSlice({
    name: 'expenses',
    initialState: {
        expenses: [],
        total: 0,        
    },
    reducers: {
        setExpenses:(state,action)=>{
            state.expenses = action.payload
        },        
    }
});

export const {setExpenses} = expenseSlicer.actions
export default expenseSlicer.reducer