import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';

const initialStore = {
    messages: {
        1:{ autor: "Бот", text: "Привет!" },
        2:{ autor: "Бот", text: "Как дела?" },
        3:{ autor: "Бот", text: "Как дела?" },
    },
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
       default:
           return store;
   }
}
