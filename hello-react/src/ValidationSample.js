import React, { useState } from 'react';
import './ValidationSample.css'

const ValidationSample = () => {
    const input = React.createRef();
    const [password, setPassword] = useState('');
    const [clicked, setClicked] = useState(false);
    const [validated, setValidated] = useState(false);
    const handleChange = e => {
        setPassword(e.target.value);
    }
    const handleButtonClick = () =>  {
        setClicked(true);
        setValidated(password === '0000');
        console.log(input);
        input.current.focus();
    };

    return (
        <div>
            <input 
                ref={input}
                type="password"
                value={password}
                onChange={handleChange}
                className={clicked ? (validated ? 'success' : 'failure'): ''}
            />
            <button onClick={handleButtonClick}>검증</button>
        </div>
    );
};


export default ValidationSample;