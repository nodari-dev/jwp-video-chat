import React, {useEffect, useRef, useState } from "react";
import {Footer} from "../../common";
import {Navigation} from "../../components";
import {VideoCameraIcon} from '@iconicicons/react';
import "./style.scss";
import {useNavigate} from "react-router-dom";
import {v4} from 'uuid';
import socket from "../../socket";
import { ACTIONS } from "../../socket/actions";

export default (props: any) => {
    const history = useNavigate();
    const [rooms, updateRooms] = useState([]);
    const rootNode = useRef();

    useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({rooms = []} = {}) => {
            if (rootNode.current) {
                updateRooms(rooms);
            }
        });
    }, []);
    return (
        <div className={"container"}>
            <Navigation/>
            <div className={"wrap wrap-part-width full-height dashboard-content"}>
                <h2>Welcome home #USER</h2>
                <div className={"action-user"}>
                    <button onClick={()=> history(`/room/${v4()}`)} className={"action"}>
                        <VideoCameraIcon/>
                        <span>Create a meeting</span>
                    </button>
                </div>
                <h1>Available Rooms</h1>

                <ul>
                    {rooms.map(roomID => (
                        <li key={roomID}>
                            {roomID}
                            <button onClick={() => {
                                history(`/room/${roomID}`);
                            }}>JOIN ROOM</button>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer/>
        </div>
    )
}
