import React, { Component } from 'react'
import './message.css'

export default class Message extends Component {
    render() {
        return (
            <div className='message' style={ { alignSelf: this.props.autor === 'Бот' ? 'flex-start' : 'flex-end' } }>
                <div className="message-sender">Кто: {this.props.autor}</div>
                <div>{this.props.text}</div>
            </div>
        )
    }
}
