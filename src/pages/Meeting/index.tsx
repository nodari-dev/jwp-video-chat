import React from "react";
import {Footer} from "../../common";
import {Navigation, Message} from "../../components";
import ActionItem from "./ActionItem";

// import socket from "../../socket";

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
import {useParams} from "react-router-dom";
import useWebRTC, {LOCAL_VIDEO} from "../../hooks/useWebRTC";
import message from "../../components/Message";


const messages = [
    {
        name: "test",
        message: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual "
    },
    {
        name: "Nazar Bazar",
        message: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual "
    },
    {
        name: "Denis Penis",
        message: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual "
    },
    {
        name: "Danylo LOX",
        message: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual "
    },
    {
        name: "test",
        message: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual "
    },
    {
        name: "Nazar Bazar",
        message: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual "
    },
    {
        name: "Denis Penis",
        message: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual "
    },
    {
        name: "Danylo LOX",
        message: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual "
    }
]

const users = [
    {
        name: "Nazar Bazar",
        photo: "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png",
        video: true,
        voice: true
    },
    {
        name: "Nazar Bazar",
        photo: "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png",
        video: true,
        voice: true
    },
    {
        name: "Nazar Bazar",
        photo: "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png",
        video: true,
        voice: true
    },
    {
        name: "Nazar Bazar",
        photo: "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png",
        video: true,
        voice: true
    },
    {
        name: "Nazar Bazar",
        photo: "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png",
        video: true,
        voice: true
    },


]

function layout(clientsNumber = 1) {
    const pairs: any = Array.from({length: clientsNumber})
        .reduce((acc: any, next, index, arr) => {
            if (index % 2 === 0) {
                acc.push(arr.slice(index, index + 2));
            }

            return acc;
        }, []);

    const rowsNumber = pairs.length;
    const height = `${100 / rowsNumber}%`;

    return pairs.map((row: any, index: any, arr: any) => {

        if (index === arr.length - 1 && row.length === 1) {
            return [{
                width: '100%',
                height,
            }];
        }

        return row.map(() => ({
            width: '50%',
            height,
        }));
    }).flat();
}

export default (props: any) => {

    const [showChat, setVisibleChat] = React.useState(true);
    const [showSidebar, setVisibleSidebar] = React.useState(false);

    const {id: roomID} = useParams();
    const {clients, provideMediaRef} = useWebRTC(roomID);
    const videoLayout = layout(clients.length);

    const setGrid = () => {
        if (users.length > 4) {
            return "grow-4"
        }
        return "";
    }
    return (
        <div className={"container meeting-main"}>
            <div className={`wrap meeting-content ${showSidebar && "full-width"}`}>
                <div className={`main-content`}>
                    <Navigation/>
                    <ul className={`members-list ${setGrid()}`}>

                        {clients.map((clientID: any, index: any) => {
                            return (
                                <li key={clientID} style={videoLayout[index]} id={clientID}>
                                    <div className={"member"}>
                                        <video
                                            width='100%'
                                            height='100%'
                                            ref={instance => {
                                                provideMediaRef(clientID, instance);
                                            }}
                                            autoPlay
                                            playsInline
                                            muted={clientID === LOCAL_VIDEO}
                                        />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="navbar">
                        <ul className={"meeting-menu-list"}>
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

                            <li onClick={() => setVisibleSidebar(!showSidebar)}>
                                <ActionItem icon={<MessageIcon/>}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`wrap meeting-sidebar ${showSidebar && "hidden"}`}>
                <div className="content">
                    <div className="tabs">
                        <ul className={"tabs-list"}>
                            <li className={`${showChat && "active"}`}>
                                <span onClick={() => setVisibleChat(true)}><p>Chat</p></span>
                            </li>
                            <li className={`${!showChat && "active"}`}>
                                <span onClick={() => setVisibleChat(false)}>
                                    <p>Members</p> <div className={"users-count"}><p>{clients.length}</p></div>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className={"messages"}>
                        <ul className={'messages-list'}>
                            {messages.map((item: any, index: any) => {
                                return(
                                    <li key={index}>
                                        <Message name={item.name} message={item.message}/>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={"form-message"}>

                    </div>
                </div>
            </div>
        </div>
    )
}