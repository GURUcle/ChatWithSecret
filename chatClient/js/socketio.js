import io from 'socket.io-client'


const socket = io('http://localhost:3000', {
    transports: ['websocket'],
});

socket.isConnected = false;

socket.on('connect', function () {
    console.log('连接服务器成功...');
    socket.isConnected = true;
});



export default socket;