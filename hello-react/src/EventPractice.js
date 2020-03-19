import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: ''
    }

    handleChagne = e => {
        this.setState({
            message: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>evnet test</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="input anything"
                    value={this.state.message}
                    onChange={this.handleChagne}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventPractice;