import React from "react";
import "./style.scss";

interface Props {
    enabled: boolean;
    hook: any;
    clients: number;
}



export default (props: Props) => {
    return (
        <ul className={"tabs-list"}>
            <li className={`${props.enabled && "active"}`}>
                <span onClick={() => props.hook(true)}><p>Chat</p></span>
            </li>
            <li className={`${!props.enabled && "active"}`}>
                <span onClick={() => props.hook(false)}>
                    <p>Members</p> <div className={"users-count"}><p>{props.clients}</p></div>
                </span>
            </li>
        </ul>
    )
}