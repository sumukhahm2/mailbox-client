import { createSlice } from "@reduxjs/toolkit";

const defaultState={
    inboxdata:[]
}

const inboxSlice=createSlice({
    name:'inbox',
    initialState:defaultState,
    reducers:{
        addInboxMail(state,action){
            state.inboxdata=state.inboxdata.concat(action.payload)
        }
    }
})

export const inboxActions=inboxSlice.actions

export default inboxSlice.reducer