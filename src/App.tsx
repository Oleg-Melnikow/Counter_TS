import React, {useState} from 'react';
import './App.css';
import {InfoBoard} from "./components/InfoBoard";
import {Button} from "./components/Button";

function App() {
    let [count, setCount] = useState<number>(0);
    const limitValue = 5;

    const incrementHandler = () => setCount(++count);
    let equal = (limitValue === count);
    const resetHandler = () => setCount(0);

    return (
        <div className="App">
            <div className="wrap-counter">
                <InfoBoard count={count} isLimitValue={equal}/>
                <div className="wrap-button">
                    <Button name="increment" onClickHandler={incrementHandler} disabled={equal}/>
                    <Button name="reset" onClickHandler={resetHandler} disabled={!count}/>
                </div>
            </div>
        </div>
    )
}

export default App;
