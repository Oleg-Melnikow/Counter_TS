import React from "react";

type PropsType = {
    name: string,
    onClickHandler: () => void,
    disabled: boolean
}

export function Button(props: PropsType) {

    const {disabled, name, onClickHandler} = props;
    const disabledCLass = disabled ? "disabled" : "";

    return <button className={disabledCLass}
                   onClick={onClickHandler}
                   disabled={disabled}>{name}</button>
}