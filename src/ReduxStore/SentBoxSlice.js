import { createSlice } from "@reduxjs/toolkit";

const defaultSentBoxState={
    sentMails:[]
}

const sentBoxSlice=createSlice({
    name:'sentbox',
    initialState:defaultSentBoxState,
    reducers:{
        addSentBoxMails(state,action){
           state.sentMails=state.sentMails.concat(action.payload)
        }
    }
})

export const sentBoxActions=sentBoxSlice.actions

export default sentBoxSlice.reducer