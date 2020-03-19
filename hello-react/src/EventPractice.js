import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        username: '',
        message: ''
    }

    handleChagne = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(`${this.state.username}: ${this.state.message}`);
        this.setState({
            username: '',
            message: ''
        });
    }

    handleKeyPress = (e) =>{
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>evnet test</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="input anything"
                    value={this.state.username}
                    onChange={this.handleChagne}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="input anything"
                    value={this.state.message}
                    onChange={this.handleChagne}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventPractice;