import { createSlice } from "@reduxjs/toolkit"



const initialState={
    token:""
}

const userslice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setToken:(state,{payload})=>{
            state.token=payload;
        }
    }
})
export default userslice.reducer;
export const {setToken}=userslice.actions;