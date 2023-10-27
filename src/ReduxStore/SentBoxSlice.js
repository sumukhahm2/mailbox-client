import { createSlice } from "@reduxjs/toolkit";

const defaultSentBoxState={
    sentMails:[]
}

const sentBoxSlice=createSlice({
    name:'sentbox',
    initialState:defaultSentBoxState,
    reducers:{
        addSentBoxMails(state,action){
            console.log(action.payload)
           state.sentMails=state.sentMails.concat(action.payload)
        },
        deleteSentMails(state,action){
            state.sentMails=state.sentMails.filter((obj)=>{
                return action.payload!==obj.id
            })
            console.log(state.sentMails)
        },
        addMails(state,action){
            if(state.sentMails.length!==action.payload.length)
            {
                state.sentMails=[]
                state.sentMails=state.sentMails.concat(action.payload)
            }
            
        }
    }
})

export const sentBoxActions=sentBoxSlice.actions

export default sentBoxSlice.reducer