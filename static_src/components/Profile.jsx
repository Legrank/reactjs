import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {bindActionCreators} from "redux"
import connect from "react-redux/es/connect/connect"
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Heder from './Header'
import { loadProfile } from '../actions/profileActions';

export class Profile extends Component {

    componentDidMount() {
        this.props.loadProfile();
    }

    render() {
        return (
            <div>
                <Heder chatId= 'Профиль' ></Heder>
                <div className='chat'>
                    <ul>
                        <li>Имя: {this.props.profile.name}</li>
                        <li>Возраст: {this.props.profile.age}</li>
                        <li>Пол: {this.props.profile.gender}</li>
                    </ul>
                </div>
                <Link to={`/`}>
                    <ListItem button>
                        <ListItemText primary='Вернутся в чат' />
                    </ListItem>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = ({ profileReduser }) => ({
    profile: profileReduser.profile,
 })
 const mapDispatchToProps = dispatch => bindActionCreators({ loadProfile }, dispatch)
 export default connect(mapStateToProps, mapDispatchToProps)(Profile)
