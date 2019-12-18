import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ChatItem from './ChatItem'

export default class ChatList extends Component {
    state = {
        chats: [{ text: "Первый чат" }, {text: "React" }, { text: "JS" }, { text: "Супер чат!!!" }, { text: "Все СЮДА!!!!!!!!!!!!!!!!!" },],
    }
    render() {
        const chatElements = this.state.chats.map((chat, index) => (
            <ChatItem key={index} text={chat.text} chatId={index}/>));
        return (
            <div className='chat-list'>
                <List component="nav" aria-label="main mailbox folders" classes={{ root: 'allwidth' }}>
                    {chatElements}
                </List>
           </div>
        )
    }
}
