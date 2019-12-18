import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className='heder'>
                <h1>Не стреляйте в программиста, он верстает как умеет.</h1>
                <h2>{this.props.chatId}</h2>
                <Link to={`/profile/`}>
                    <p className='heder-profile'>Профиль</p>
                </Link>
            </div>
        )
    }
}
