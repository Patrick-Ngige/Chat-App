import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Chats = () => {

  const [chats,setChats] = useState([]);

  const [currentUser] = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      })
  
      return () => {
        unsub();
      }
    }

    currentUser.uid && getChats();
  }, [currentUser.uid])

  console.log(chats)
  return (
    <div className='chats'>
      {Object.entries(chats)?.map((chat) => (
        <div className="userChat" key={chat[0]}>
        <img src="https://cdn.pixabay.com/photo/2023/08/02/02/46/woman-8164186_1280.jpg" alt="" />
        <div className="userChatInfo">
          <span>{chat[1].displayName}</span>
          <p>{chat[1].lastMessage?.text}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Chats
