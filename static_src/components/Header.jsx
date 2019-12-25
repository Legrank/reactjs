import React, { Component } from 'react'
import {bindActionCreators} from "redux"
import connect from "react-redux/es/connect/connect"
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        const heder = this.props.chats[this.props.chatId] ? this.props.chats[this.props.chatId].text : 'Профиль'
        return (
            <div className='heder'>
                <h1>Не стреляйте в программиста, он верстает как умеет.</h1>
                <h2>{ heder }</h2>
                <Link to={`/profile/`}>
                    <p className='heder-profile'>Профиль: {this.props.profile.name}</p>
                </Link>
            </div>
        )
    }
}
const mapStateToProps = ({ profileReduser, chatReducer, }) => 
    {
        return {
            profile: profileReduser.profile,
            chats: chatReducer.chats,
        }
    }
 const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
 export default connect(mapStateToProps, mapDispatchToProps)(Header)
