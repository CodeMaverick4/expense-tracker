import { createSlice } from "@reduxjs/toolkit";

const themeSlicer = createSlice({
    name:'theme',
    initialState: false,
    reducers:{
        toogleTheme:(state)=> !state
    }
});

export const {toogleTheme} = themeSlicer.actions
export default themeSlicer.reducer