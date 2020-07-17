import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome visitor',
            color: 'Blue'
        };
    }
    changeMessage() {
        this.setState(
            {
                message: 'Thank you for subscribing',
                color: 'Green'
            }
        )
    }
    resetMessage() {
        this.setState(
            {
                message: 'Welcome visitor',
                color: 'Blue'
            }
        )
    }
    render() {
        return (
            <div>
                <h1 style={{ color : this.state.color }}>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button><br/>
                <button onClick={() => this.resetMessage()}>Reset</button>

            </div>
        )
    }
}
export default Message;