import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import chatReducer from './chatReducer'
import messageReduser from './messageReduser'
import profileReduser from './profileReduser'

export default (history) => combineReducers({
   router: connectRouter(history),
   chatReducer,
   messageReduser,
   profileReduser,
});