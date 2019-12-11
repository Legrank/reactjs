import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class ChatItem extends Component {
    render() {
        return (
            <ListItem button>
                <ListItemText primary={this.props.text} />
            </ListItem>
        )
    }
}
