import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return (
            <div>
                <div>Кто: {this.props.autor}</div>
                <div>Сообщение: {this.props.text}</div>
            </div>
        )
    }
}
