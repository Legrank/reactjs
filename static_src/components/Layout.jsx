import React, { Component } from 'react'
import ChatList from './ChatList'
import Heder from './Header'
import MessageField from './MessageField'

export default class Layout extends Component {
    state = {
        chats: {
                0:{ text: "Первый чат", messageList: [1,3] },
                1:{text: "React", messageList: [2] },
                2:{ text: "JS", messageList: [] },
                3:{ text: "Супер чат!!!", messageList: [] },
                4:{ text: "Все СЮДА!!!!!!!!!!!!!!!!!", messageList: [] },
            },
        messages: {
                1:{ autor: "Бот", text: "Привет!" },
                2:{ autor: "Бот", text: "Как дела?" },
                3:{ autor: "Бот", text: "Как дела?" },
            },
    }
    static defaultProps = {
        chatId: 4,
    }

    sendMessage = (message, autor, chat) => {
        const { messages, chats } = this.state;
        const { chatId } = this.props;
        const messageId = Object.keys(messages).length + 1;
        this.setState({
            messages: {...messages,
                [messageId]: {text: message, autor: autor}},
            chats: {...chats,
                [chatId]: { ...chats[chatId],
                    messageList: [...chats[chatId]['messageList'], messageId]
                }
            },
        })
    }

    render() {
        const chatId = this.props.chatId
        return (
            <div>
                <Heder chatId={ this.state.chats[chatId].text } ></Heder>
                <div className='chat'>
                    <MessageField sendMessage = { this.sendMessage } messages ={ this.state.messages } chats = { this.state.chats } chatId={ chatId }></MessageField>
                    <ChatList></ChatList>
                </div>
            </div>
        )
    }
}
