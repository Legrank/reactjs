export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (messageId, text, autor, chatId) => ({
   type: SEND_MESSAGE,
   messageId,
   text,
   autor,
   chatId,
});