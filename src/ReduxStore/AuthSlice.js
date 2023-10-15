import { createSlice } from "@reduxjs/toolkit";

const defaultAuthSlice={
    isAuthenticated:false,
    token:'',
    authError:''

}

const AuthSlice=createSlice({
    name:'auth',
    initialState:defaultAuthSlice,
    reducers:
    {
        login(state){
          state.isAuthenticated=true
        },
        setToken(state,action){
         state.token=action.payload
        },
        setAuthError(state,action){
         state.authError=action.payload
        }

    }
})

export const authActions=AuthSlice.actions

export default AuthSlice.reducer