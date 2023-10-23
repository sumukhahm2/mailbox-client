import { createSlice } from "@reduxjs/toolkit";

const defaultState={
    inboxdata:[],
    read:false,
    unreadCount:0
}

const inboxSlice=createSlice({
    name:'inbox',
    initialState:defaultState,
    reducers:{
        addInboxMail(state,action){
            state.inboxdata=state.inboxdata.concat(action.payload)
        },
        inboxRead(state){
            state.read=true
        },
        addUnreadCount(state,action){
         state.unreadCount=state.unreadCount+action.payload
        },
        deleteUnreadCount(state){
            if(state.unreadCount>0)
              state.unreadCount=state.unreadCount-1
        }
    }
})

export const inboxActions=inboxSlice.actions

export default inboxSlice.reducer