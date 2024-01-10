import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        togghleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu :(state)=>{
            state.isMenuOpen=false;
        }
    }
});

export const{togghleMenu,closeMenu} = appSlice.actions;
export default appSlice.reducer;