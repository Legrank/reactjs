import React, { Component } from 'react'
import {bindActionCreators} from "redux"
import connect from "react-redux/es/connect/connect"
import { push } from 'connected-react-router'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export class ChatItem extends Component {
    state = {
        add: 0,
    }
    handleNavigate = (link) => {
        this.setState({add: 0})
        this.props.push(link)
    }
    componentDidUpdate (prevProps) {
        if (prevProps.chats[this.props.chatId].messageList.length !== this.props.chats[this.props.chatId].messageList.length) {
            this.setState({add: this.state.add+1})
        }
    }
    render() {
        return (
                <ListItem button onClick={ () => this.handleNavigate(`/chat/${this.props.chatId}`) }>
                    <ListItemText primary={this.props.text} />
                    <ListItemText primary={"Новых сообщений: "+this.state.add} />
                </ListItem>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);
