import React from 'react';
import { useState } from 'react';
import './counter.css';

const Counter = () => {


    const [counter, setCounter] = useState(0);

    function handleIncrement() {
        setCounter(counter + 1);
    }

    function handleDecrement() {
        setCounter(counter - 1);
    }
    return (
        <div className='title'>
            <h3>Counter App</h3>

            <div className='counter'>
                <div className='counterVal'>{counter}</div>
                <div className='calculate'>
                    <button onClick={handleIncrement}>Increment</button>
                    <button onClick={handleDecrement}>Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;