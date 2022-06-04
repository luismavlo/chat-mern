import React, { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext';
import { fetchConToken } from '../helpers/fetch';
import { scrollToBottom } from '../helpers/ScrollToBottom';
import { types } from '../types/types';

export const SidebarChatItem = ({ usuario }) => {

  const { chatState, dispatch } = useContext(ChatContext);
  const { chatActivo } = chatState;

  const onClick = async () => {
    dispatch({
      type: types.activarChat,
      payload: usuario.uid
    });

    const resp = await fetchConToken(`mensajes/${usuario.uid}`)

    dispatch({
      type: types.cargarMensaje,
      payload: resp.mensajes
    })

    scrollToBottom('mensajes')
  }

  return (
    <div className={`chat_list ${(usuario.uid === chatActivo) && 'active_chat'}`} onClick={onClick}>
      {/* active_chat */}
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{usuario.nombre}</h5>
          {
            (usuario.online)
              ? <span className="text-success">Online</span>
              : <span className="text-danger">Offline</span>
          }
        </div>
      </div>
    </div>
  )
}
