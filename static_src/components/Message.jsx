import React, { Component } from 'react'
import './message.css'

export default class Message extends Component {
    render() {
        return (
            <div className='message' style={ { alignSelf: this.props.autor === 'Я' ? 'flex-end' : 'flex-start' } }>
                <div className="message-sender">Кто: {this.props.autor}</div>
                <div>{this.props.text}</div>
            </div>
        )
    }
}
