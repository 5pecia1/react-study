import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// define action
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCRESE = 'INCRESE';
const DECRESE = 'DECRESE';

//define actoin creator
const toggleSwith = () => ({type: TOGGLE_SWITCH});
const increase = difference => ({type: INCRESE, difference});
const decrease = () => ({type: DECRESE});

const initialState = {
    toggle: false,
    counter: 0
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle
            };
        case INCRESE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECRESE:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

const render = () => {
    const state = store.getState();

    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');

        counter.innerText = state.counter;
    }
}

render();
store.subscribe(render);

const listener = () => {
    console.log('state updated');
}

const unsubscribe = store.subscribe(listener); 

//TODO: can't unsubscribe
unsubscribe();

divToggle.onclick = () => {
    store.dispatch(toggleSwith());
};

btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
    store.dispatch(decrease());
};