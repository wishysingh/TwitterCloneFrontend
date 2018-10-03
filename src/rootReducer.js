import { contactReducer } from "./reducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    searchingTweets: contactReducer
});

export default rootReducer;