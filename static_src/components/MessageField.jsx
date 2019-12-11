import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {InputBase, Button, Paper} from '@material-ui/core'
import SendIcon from '@material-ui/icons/SendOutlined'
import Message from './Message'

export default class MessageField extends Component {
    state = {
        messages: [{ autor: "Вася", text: "Привет!" }, { autor: "Вика", text: "Как дела?" }],
        udate: false,
        input: '',
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
                messages: [...this.state.messages, { autor: "Я", text: message }],
                udate: true,
                input: '',
            })
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
            setTimeout(() => {
                this.setState({
                    messages: [...this.state.messages, { autor: "Бот", text: "Я бот "}],
                    udate: false
                })
            }, 3000)
        }
    }

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={index} text={message.text} autor={message.autor} />));

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
