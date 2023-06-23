import { createSlice } from "@reduxjs/toolkit"



const initialState={
    input:"ashok"
}

const inputslice=createSlice({
    name: 'input',
    initialState,
    reducers: {
        setinput:(state,{payload})=>{
            state.input=payload;
        },
        addinput:(state,{payload})=>{
            state.input=state.input+payload;
        },
        replaceinput:(state,{payload})=>{
            state.input=state.input.replace(state.input.substring(state.input.indexOf('@')),payload)
        }
    }
})

export default inputslice.reducer;
export const {setinput,addinput,replaceinput} =inputslice.actions;
