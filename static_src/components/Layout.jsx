import React, { Component } from 'react'
import ChatList from './ChatList'
import Heder from './Header'
import MessageField from './MessageField'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Heder></Heder>
                <div className='chat'>
                    <MessageField></MessageField>
                    <ChatList></ChatList>
                </div>
            </div>
        )
    }
}
