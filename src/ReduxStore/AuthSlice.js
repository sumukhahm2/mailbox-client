import { createSlice } from "@reduxjs/toolkit";

const defaultAuthSlice={
    isAuthenticated:false,
    token:null,
    authError:''

}

const AuthSlice=createSlice({
    name:'auth',
    initialState:defaultAuthSlice,
    reducers:
    {
        login(state){
          state.isAuthenticated=!!state.token
          console.log(state.isAuthenticated)
        },
        setToken(state,action){
        
            state.token=action.payload.idToken
            localStorage.setItem('token',action.payload.idToken)
            localStorage.setItem('email',action.payload.email)
            state.isAuthenticated=!!state.token
        
        
        },
        setAuthError(state,action){
         state.authError=action.payload
        },
        logout(state){
            state.token=null
            localStorage.removeItem('token')
            localStorage.removeItem('email')
        }

    }
})

export const authActions=AuthSlice.actions

export default AuthSlice.reducer