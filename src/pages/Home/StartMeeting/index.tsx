import React, { useEffect, useRef, useState } from "react";
import {useNavigate} from 'react-router';
import {VideoCameraIcon} from '@iconicicons/react';
import "./style.scss";
import { ACTIONS } from "../../../socket/actions";
import socket from "../../../socket";
import {v4} from 'uuid';

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
        <div className={"start-meeting"} onClick={() =>  history(`/room/${v4()}`)}>
            <VideoCameraIcon/>
            <p>Start Conference</p>
        </div>
    )
}
