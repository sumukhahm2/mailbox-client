import { createSlice } from "@reduxjs/toolkit";

const defaultState={
    inboxdata:[],
    unreadCount:0
}

const inboxSlice=createSlice({
    name:'inbox',
    initialState:defaultState,
    reducers:{
        addInboxMail(state,action){
           
            state.inboxdata.pusht(action.payload)
        },
        inboxRead(state,action){
           const indx=state.inboxdata.findIndex((obj)=> obj.id===action.payload.id)
          state.inboxdata[indx]={...state.inboxdata[indx],read:true}
           

        },
        deleteUnreadCount(state){
            if(state.unreadCount>0)
              state.unreadCount=state.unreadCount-1
        },
        deleteMails(state,action){
          state.inboxdata=state.inboxdata.filter((obj)=>{
            return action.payload!==obj.id
          })
        },
        addMail(state,action){
            if(state.inboxdata.length!==action.payload.length)
            {
                state.inboxdata=[]
                state.unreadCount=0
                const count=action.payload.reduce((prev,cur)=>{
                    return prev+cur.unread
                 },0)
                 state.inboxdata=state.inboxdata.concat(action.payload)
                 state.unreadCount=state.unreadCount+count
            }
              
        }
        }
    })

export const inboxActions=inboxSlice.actions

export default inboxSlice.reducer