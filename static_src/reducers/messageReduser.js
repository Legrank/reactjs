import update from 'react-addons-update';
import { SEND_MESSAGE, } from '../actions/messageActions';
import {
    START_CHATS_LOADING,
    SUCCESS_CHATS_LOADING,
    ERROR_CHATS_LOADING,
 } from '../actions/chatActions';

const initialStore = {
    messages: {},
    isLoading: true,
};


export default function messageReduser(store = initialStore, action) {
    switch (action.type) {
       case SEND_MESSAGE: {
           return update(store, {   
            messages: {$merge:{
                    ...store.messages,
                    [action.messageId]: {text: action.text, autor: action.autor}
                },
            }
        });
       }
       case START_CHATS_LOADING: {
            return update(store, {
            isLoading: { $set: true },
            });
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                messages: { $set: action.payload.entities.messages },
            });
        }
        case ERROR_CHATS_LOADING: {
            return update(store, {
                isLoading: { $set: false },
            });
        }
       default:
           return store;
   }
}
