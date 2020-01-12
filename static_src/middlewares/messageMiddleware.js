import { SEND_MESSAGE, sendMessage } from "../actions/messageActions";

export default store => next => (action) => {
   switch (action.type) {
       case SEND_MESSAGE:
           if (action.autor === 'Я') {
                setTimeout(() => store.dispatch(sendMessage(Object.keys(store.getState().messageReduser.messages).length + 1,'Не приставай ко мне, я робот!', 'Бот', action.chatId)), 1000)
           }
   }
   return next(action)
}
