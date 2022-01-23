import React from "react";
import {UserIcon} from '@iconicicons/react';
import "./style.scss";

interface Props {
    name: string;
}

export default (props: Props) => {
    return (
        <div className={"user"}>
            <p>{props.name}</p>
            <div className={"user-avatar"}><UserIcon/></div>
        </div>

    )
}