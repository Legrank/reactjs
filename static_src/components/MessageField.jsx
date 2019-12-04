import React, { Component } from 'react'
import Message from './Message'

export default class MessageField extends Component {
    state = {
        messages: [{ autor: "Вася", text: "Привет!" }, { autor: "Вика", text: "Как дела?" }],
        udate: false
    };

    handleClick = () => {
        this.setState({
            messages: [...this.state.messages, { autor: "Я", text: "Нормально" }],
            udate: true
        })
    };

    componentDidUpdate() {
        if (this.state.udate) {
            setTimeout(() => {
                this.setState({
                    messages: [...this.state.messages, { autor: "Бот", text: "Я бот" }],
                    udate: false
                })
            }, 3000)
        }
    }

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={index} text={message.text} autor={message.autor} />));

        return <div>
            {messageElements}
            <button onClick={this.handleClick}>Отправить сообщение</button>
        </div>
    }
}
