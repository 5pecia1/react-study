import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number:0
    }
    constructor(props) {
        super(props);
    }

    render() {
        const { number } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button 
                    onClick={() => {
                        this.setState((prevState, props) => 
                            ({number: prevState.number + 1}),
                            () =>{
                                console.log(this.state)
                            }
                        );
                        this.setState((prevState, props) => 
                            ({number: prevState.number + 1})
                        );
                    }}
                    >
                        +1
                    </button>
            </div>
        );
    }
}

export default Counter;