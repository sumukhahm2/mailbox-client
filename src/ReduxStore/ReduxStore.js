import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './AuthSlice'
import sentBoxReducer from './SentBoxSlice'
import inboxReducer from './InboxSlice'
import errorReducer from './ErrorSlice'
const store=configureStore({
    reducer:{auth:AuthReducer,sentbox:sentBoxReducer,inbox:inboxReducer,error:errorReducer}
})

export default store