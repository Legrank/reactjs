import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Heder from './Header'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Heder chatId= 'Профиль' ></Heder>
                <div className='chat'>
                    <p>Имя: Вася</p>
                    <p>Возраст: 27</p>
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
