import React from "react";
import {UserIcon} from "@iconicicons/react";
import './style.scss';

interface Props{
    name: string;
    message: string;
}

export default (props: Props) => {
    return(
        <div className={"message-item"}>
            <div className={"avatar"}><UserIcon/></div>
            <div className={"message-content"}><h4>{props.name}</h4><p>{props.message}</p></div>
        </div>
    )
}