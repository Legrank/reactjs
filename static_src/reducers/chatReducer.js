import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from "../actions/chatActions";

const initialStore = {
    chats: {
        0:{ text: "Первый чат", messageList: [1,3] },
        1:{ text: "React", messageList: [2] },
        2:{ text: "JS", messageList: [] },
        3:{ text: "Супер чат!!!", messageList: [] },
        4:{ text: "Все СЮДА!!!!!!!!!!!!!!!!!", messageList: [] },
    },
};


export default function chatReducer(store = initialStore, action) {
   switch (action.type) {
       case SEND_MESSAGE: {
           return update(store, {
               chats: { $merge: { [action.chatId]: {
                    text: store.chats[action.chatId].text,
                    messageList: [...store.chats[action.chatId].messageList, action.messageId]
               } } },
           });
       }
       case ADD_CHAT: {
           const chatId = Object.keys(store.chats).length + 1;
           return update(store, {
              chats: { $merge: {
                  [chatId]: {
                      title: action.title, messageList: []
              } } },
           });
       }
       default:
           return store;
   }
}
