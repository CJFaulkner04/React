import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    function increment(){
        let newCount = count+1
        setCount(newCount);
    }

    function decrement(){
        let newCount = count-1;
        setCount(newCount);
    }
    return (
        <div>
            <h1>Count With React</h1>
            <h2>{count}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div> 
    );
}

export default Counter;