import React, { Component } from 'react';
import whatsappIcon  from '../../image_folder/Desktop/whatsapp.svg';

class ChatRoom extends Component {
    render() {
        return (
            <div id="chat-btns">
                <div className="chat-btn" id="whatsapp">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=919985556775">
                        <img src={whatsappIcon} alt="Whatsapp" />
                    </a>
                </div>
            </div>
        )
    }
}

export default ChatRoom;