import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import connect from "react-redux/es/connect/connect"
import ChatList from './ChatList'
import Heder from './Header'
import MessageField from './MessageField'

export class Layout extends Component {
    static defaultProps = {
        chatId: 4,
    }

    sendMessage = (message, sender) => {
        const { messages } = this.state;
        const { chatId } = this.props;
 
        const messageId = Object.keys(messages).length + 1;
        this.props.sendMessage(messageId, message, sender, chatId);
    }

    render() {
        const chatId = this.props.chatId
        return (
            <div>
                <Heder chatId={ chatId }></Heder>
                <div className='chat'>
                    <MessageField
                        chatId={ chatId }
                    />
                    <ChatList></ChatList>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({}) => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Layout)

