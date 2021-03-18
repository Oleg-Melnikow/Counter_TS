import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

function App() {
    let [count, setCount] = useState<number>(0);
    const limitValue = 5;
    let equal = (limitValue === count);
    const incrementHandler = () => setCount(++count);
    const resetHandler = () => setCount(0);

    return (
        <div className="App">
            <Counter count={count} equal={equal} incrementHandler={incrementHandler} resetHandler={resetHandler}/>
        </div>
    )
}

export default App;
