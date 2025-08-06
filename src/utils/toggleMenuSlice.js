import { createSlice } from "@reduxjs/toolkit";

const menuToggleSlice = createSlice(
    {
        name:"menuToggle",
        initialState:{
            toggleMenu:true,
        },
        reducers:{
            enableToggleMenu : (state)=>{
                state.toggleMenu= !state.toggleMenu;
            },
            closeToggleMenu : (state)=>{
                state.toggleMenu=false;
            }
        }
    }
);
export const {enableToggleMenu, closeToggleMenu}= menuToggleSlice.actions;
export default menuToggleSlice.reducer;