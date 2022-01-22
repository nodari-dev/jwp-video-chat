import React from "react";
import {Footer} from "../../common";
import {Navigation} from "../../components";
import {LinkIcon, VideoCameraIcon} from '@iconicicons/react';
import "./style.scss";
export default (props: any) => {
    return (
        <div className={"container"}>
            <Navigation/>
            <div className={"wrap wrap-part-width full-height dashboard-content"}>
                <h2>Welcome home #USER</h2>
                <div className={"action-user"}>
                    <button className={"action"}>
                        <VideoCameraIcon/>
                        <span>Create a meeting</span>
                    </button>
                    <button className={"action"}>
                        <LinkIcon/>
                        <span>Connect to existing</span>
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
