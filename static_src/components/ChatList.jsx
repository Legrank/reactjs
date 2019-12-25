import React, { Component } from 'react'
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect"
import List from '@material-ui/core/List';
import ChatItem from './ChatItem'
import { addChat } from '../actions/chatActions'

export class ChatList extends Component {
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

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
 })
 const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch)
 export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
