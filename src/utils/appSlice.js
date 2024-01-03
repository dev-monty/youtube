import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        togghleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
});

export const{togghleMenu} = appSlice.actions;
export default appSlice.reducer;