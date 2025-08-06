import { configureStore } from "@reduxjs/toolkit";
import menuToggleReducer from "./toggleMenuSlice.js"

const appStore = configureStore(
    {
        reducer:{
            menuToggle:menuToggleReducer,
        }
    }
)
export default appStore;