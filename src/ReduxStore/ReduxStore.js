import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './AuthSlice'
import sentBoxReducer from './SentBoxSlice'
import inboxReducer from './InboxSlice'
const store=configureStore({
    reducer:{auth:AuthReducer,sentbox:sentBoxReducer,inbox:inboxReducer}
})

export default store