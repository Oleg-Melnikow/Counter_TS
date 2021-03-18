import React from "react";
import { Button } from "./Button";

type PropsType = {
    count: number,
    equal: boolean,
    incrementHandler: () => void,
    resetHandler: () => void
}

export function Settings(props: PropsType) {
    return(
        <div className="wrap-counter">
            <div className="infoBoard">
                <div className="wrap-input">
                    <span>ddd</span>
                    <input type="number"/>
                </div>
            </div>
            <div className="wrap-button">
                <Button name="set" onClickHandler={props.resetHandler} disabled={!props.count}/>
            </div>
        </div>
    )
}