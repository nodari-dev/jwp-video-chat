import React from "react";
import {Footer} from "../../common";
import {Navigation} from "../../components";
import ActionItem from "./ActionItem";

import socket from "../../socket";

import {
    SettingsSlidersIcon,
    VideoCameraIcon,
    VideoCameraOffIcon,
    MicrophoneIcon,
    MicrophoneMuteIcon,
    MessageIcon,
    PhoneCallCrossIcon
} from '@iconicicons/react';

import "./style.scss";
import Member from "./Member";


const users = [
    {
        name: "Nazar Bazar",
        photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        video: true,
        voice: true
    },
    {
        name: "Danylo 228",
        photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        video: true,
        voice: true
    },
    {
        name: "Chord TDM",
        photo: "https://images.pexels.com/photos/10189480/pexels-photo-10189480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        video: true,
        voice: true
    },
]

export default (props: any) => {

    const [showChat, setChatVisability] = React.useState(true);

    return (
        <div className={"container"}>
            <Navigation/>
            <div className={"wrap wrap-full-width full-height meeting-content"}>
                <div className="left-content">
                    <ul className={"members-list"}>
                        {users.map((item, key) => {
                            <li key={key}>
                                <Member name={item.name} video={item.video} voice={item.voice} photo={item.photo}/>
                            </li>
                        })}
                    </ul>


                    <div className="navbar">
                        <ul className={"meeting-menu-list"}>
                            <li onClick={() => console.log("open settings")}>
                                <ActionItem icon={<SettingsSlidersIcon/>}/>
                            </li>
                            <li>
                                <ul className={"main-item"}>
                                    <li onClick={() => console.log("phone")}>
                                        <ActionItem
                                            phone={true}
                                            icon={<PhoneCallCrossIcon/>}
                                        />
                                    </li>
                                    <li onClick={() => console.log("video")}>
                                        <ActionItem
                                            icon={<VideoCameraIcon/>}
                                            disabled={true}
                                            disableIcon={<VideoCameraOffIcon/>}
                                        />
                                    </li>
                                    <li onClick={() => console.log("micro")}>
                                        <ActionItem
                                            icon={<MicrophoneIcon/>}
                                            disableIcon={<MicrophoneMuteIcon/>}
                                        />
                                    </li>
                                </ul>
                            </li>

                            <li onClick={() => console.log("message")}>
                                <ActionItem icon={<MessageIcon/>}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right-content"></div>
            </div>
            <Footer/>
        </div>
    )
}