import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './AuthSlice'
import sentBoxReducer from './SentBoxSlice'
const store=configureStore({
    reducer:{auth:AuthReducer,sentbox:sentBoxReducer}
})

export default store