import React from "react";
import {VideoCameraIcon} from '@iconicicons/react';
import "./style.scss";

export default (props: any) => {
    return (
        <div className={"start-meeting"} onClick={() => console.log('create meeting')}>
            <VideoCameraIcon/>
            <p>Start Conference</p>
        </div>
    )
}