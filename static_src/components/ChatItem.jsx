import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default class ChatItem extends Component {
    render() {
        return (
            <Link to={`/chat/${this.props.chatId}/`}>
                <ListItem button>
                    <ListItemText primary={this.props.text} />
                </ListItem>
            </Link>
        )
    }
}
