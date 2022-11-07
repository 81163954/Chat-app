// @flow
import * as React from 'react';
import {useSocket} from "../contexts/socket.tsx";


export const ComponentA = () => {
    // const socket = useSocket();
    // function handleMessage(msg) {
    //     console.log(msg)
    // }
    //
    // useEffect(() => {
    //     // componentDidMount
    //     socket.on('get_message', handleMessage); // 监听消息
    //     return () => {
    //         // componentWillUnmount
    //         socket.off('get_message', handleMessage);
    //     };
    // }, [socket]);

    return (<div></div>);
};

export const ComponentB = () => {

    const socket = useSocket();

    const handleSendMessage = () => {
        socket.emit('send_message', {
            type:"CLIENT",
            message:"hello",
            room:"a"
        }); // 发送消息
        console.log("发送成功")
    }

    return <div>
        <button onClick={handleSendMessage}>Send message</button>
    </div>;
};

export default ComponentA;