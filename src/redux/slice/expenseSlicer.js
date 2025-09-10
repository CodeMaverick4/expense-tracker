import { createSlice } from "@reduxjs/toolkit";

const expenseSlicer = createSlice({
    name: 'expenses',
    initialState: {
        expenses: [],
        total: 0,
        premium: localStorage.getItem('premium') ||  false
    },
    reducers: {
        setExpenses: (state, action) => {
            state.expenses = action.payload.expensesArr
            state.total = action.payload.total
        },
        downloadCsv: (state) => {
            if (state.expenses.length === 0) return alert("No data to download");

            const csvHeader = "Amount,Description,Category\n";

            const csvRows = state.expenses
                .map(exp => `${exp.amount},${exp.description},${exp.category}`)
                .join("\n");

            const csvContent = csvHeader + csvRows;
            const blob = new Blob([csvContent], { type: "text/csv" });

            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "expenses.csv";
            a.click();

            URL.revokeObjectURL(url);
        },
        tryPremium:(state)=>{
            state.premium = true;
            localStorage.setItem('premium',true);
        }
    }
});

export const { setExpenses ,downloadCsv, tryPremium} = expenseSlicer.actions
export default expenseSlicer.reducer