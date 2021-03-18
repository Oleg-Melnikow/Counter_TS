import React from "react";
import "../App.css"

type PropsType = {
    count: number,
    isLimitValue: boolean
}

export function InfoBoard(props: PropsType) {

    const {isLimitValue, count} = props;
    const isLimitValueClass = isLimitValue ? "limitColor" : "";

    return (
        <div className="infoBoard">
            <span className={isLimitValueClass}>{count}</span>
        </div>
    )
}