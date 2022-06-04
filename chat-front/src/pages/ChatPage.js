import React, { useContext } from 'react'
import { ChatSelect } from '../components/ChatSelect';
import { ImboxPeople } from '../components/ImboxPeople';
import { Messages } from '../components/Messages';
import { ChatContext } from '../context/chat/ChatContext';
import '../css/chat.css';

export const ChatPage = () => {

  const { chatState } = useContext(ChatContext);

  return (
    <div className="messaging">
      <div className="inbox_msg">

        <ImboxPeople />

        {
          (chatState.chatActivo)
            ? <Messages />
            : <ChatSelect />
        }

      </div>
    </div>
  )
}
