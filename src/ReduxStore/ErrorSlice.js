import { createSlice } from "@reduxjs/toolkit";

const  defaultState={
    error:null,
    loading:false
}

const ErrorSlice=createSlice({
    name:'error',
    initialState:defaultState,
    reducers:{
        setError(state,action){
           state.error=action.payload
        },
        setLoading(state){
          state.loading=!state.loading
        }
    }
})

export const errorActions=ErrorSlice.actions

export default ErrorSlice.reducer