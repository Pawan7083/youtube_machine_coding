import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice(
    {
        name:"search",
        initialState:{

        },
        reducers:{
            cacheSearch:(state,actions)=>{
                state= Object.assign(state,actions.payload);
            }
        }
    }
);

export const {cacheSearch} = searchSlice.actions;
export default searchSlice.reducer;