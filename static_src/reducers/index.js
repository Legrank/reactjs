import { combineReducers } from 'redux'
import chatReducer from './chatReducer'
import messageReduser from './messageReduser'
import profileReduser from './profileReduser'

export default combineReducers({
   chatReducer,
   messageReduser,
   profileReduser,
});