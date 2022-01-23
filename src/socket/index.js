import {io} from 'socket.io-client';

const options = {
    "force new connection": true,
    reconnectionDelayMax: 10000,
    timeout : 10000,
    transports: ["websocket"]
}

const socket = io('ws://localhost:3001/', options);

export default socket;