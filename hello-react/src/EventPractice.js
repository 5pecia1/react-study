import React, { useState } from 'react';

const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMesage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(`${username}: ${message}`);
        setUsername('');
        setMessage('');
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
            <div>
                <h1>evnet test</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="input anything"
                    value={username}
                    onChange={onChangeUsername}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="input anything"
                    value={message}
                    onChange={onChangeMesage}
                    onKeyPress={onKeyPress}
                />
                <button onClick={onClick}>확인</button>
            </div>
    );
};

export default EventPractice;