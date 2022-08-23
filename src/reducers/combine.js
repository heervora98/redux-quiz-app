import { combineReducers } from "redux";
import {  stateReducer,answerReducer } from "./reducer";


const rootred = combineReducers({
    stateReducer,
    answerReducer
})

export default rootred