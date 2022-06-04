import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from '../context/chat/ChatContext'
import { IncomingMessage } from './IncomingMessage'
import { OutGoingMessage } from './OutGoingMessage'
import { SendMessage } from './SendMessage'

export const Messages = () => {

  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

  return (
    <div className="mesgs">
      <div
        id="mensajes"
        className="msg_history">

        {
          chatState.mensajes.map(msg => (
            (msg.para === auth.uid)
              ? <IncomingMessage key={msg.de} msg={msg} />
              : <OutGoingMessage key={msg.de} msg={msg} />
          ))
        }

      </div>
      <SendMessage />
    </div>
  )
}
