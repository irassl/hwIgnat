import React from 'react'
import './Message.css'
import s from './Message.module.css'

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: MessagePropsType) {
    return (
        <div className='msg'>
            <div>
                <img src={props.avatar} className="msg-img" alt='' />
            </div>

            <div className="msg-bubble mgmt">
                <div className="msg-info-name">{props.name}</div>
                <div className="msg-info">
                    <div className="msg-text">
                        {props.message}</div>
                    <div className="msg-info-time">{props.time}</div>
                </div>

            </div>
        </div >

    )
}

export default Message
