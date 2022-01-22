import React from "react";
import "./style.scss";

interface Props {
    name: string;
    video: boolean;
    voice: boolean;
    photo: string;
}

export default (props: Props) => {
    return (
        <div className={"member"}>
            <img
                src={props.photo}
                alt="user"/>
        </div>
    )
}