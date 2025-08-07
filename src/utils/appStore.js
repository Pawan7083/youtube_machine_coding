import { configureStore } from "@reduxjs/toolkit";
import menuToggleReducer from "./toggleMenuSlice.js"
import searchReducer from "./searchSlice.js";

const appStore = configureStore(
    {
        reducer:{
            menuToggle:menuToggleReducer,
            search:searchReducer,
        }
    }
)
export default appStore;