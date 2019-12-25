import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {bindActionCreators} from "redux"
import connect from "react-redux/es/connect/connect"
import {InputBase, Button, Paper} from '@material-ui/core'
import SendIcon from '@material-ui/icons/SendOutlined'
import { sendMessage } from "../actions/messageActions"
import Message from './Message'

export class MessageField extends Component {
    state = {
        input: '',
        udate: false,
    }

    handleChange = (event) => {
        this.setState({
             input: event.target.value,
             udate: false,
        });
    };

    sendMessage = (message) => {
        if (this.state.input) {
            this.setState({
                input: '',
                udate: true,
            })
        const { chatId, messages } = this.props

        const messageId = Object.keys(messages).length + 1
        this.props.sendMessage(messageId, message, 'Я', chatId)
        }
    }

    handleClick = (message) => {
        this.sendMessage(message)
    }

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.sendMessage(message)
        }
    }

    componentDidUpdate() {
        if (this.state.udate) {
            const { chatId, messages } = this.props
            this.setState({
                udate: false,
            })
            setTimeout(() => {
                const messageId = Object.keys(messages).length + 1
                this.props.sendMessage(messageId, "Я бот ", 'Бот', chatId)
            }, 3000)
        }
    }
 
    render() {
        const chatId = this.props.chatId
        const chats = this.props.chats
        const messages = this.props.messages
        const messageElements = chats[chatId].messageList.map((messageId) => {
            return <Message key={ messageId } text={ messages[messageId].text } autor={ messages[messageId].autor } />
        })

        return <div className="layout">
            <div className="message-field">
                {messageElements}
            </div>
            <Paper component="div" className='message-field_form' >
                <InputBase placeholder="Написать сообщение..."
                    fullWidth={true} 
                    onKeyUp={ event => this.handleKeyUp(event, this.state.input) }
                    onChange={ this.handleChange }
                    value={ this.state.input }/>
                <Button variant="contained" onClick={() => this.handleClick(this.state.input)}>
                    <SendIcon />
                </Button>
            </Paper>
        </div>
    }
}

const mapStateToProps = ({ chatReducer, messageReduser }) => ({
    chats: chatReducer.chats,
    messages: messageReduser.messages
 })
 const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch)
 export default connect(mapStateToProps, mapDispatchToProps)(MessageField)
 
