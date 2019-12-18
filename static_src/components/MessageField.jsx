import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {InputBase, Button, Paper} from '@material-ui/core'
import SendIcon from '@material-ui/icons/SendOutlined'
import Message from './Message'

export default class MessageField extends Component {
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
        }
        this.props.sendMessage(message, 'Me', this.props.chatId)
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
            setTimeout(() => {
                this.setState({
                    udate: false,
                })
                this.props.sendMessage("Я бот ", 'Бот', this.props.chatId)
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
//<button onClick={this.handleClick}></button>
