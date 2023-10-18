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
       <div className="userChat">
        <img src="https://cdn.pixabay.com/photo/2023/08/02/02/46/woman-8164186_1280.jpg" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello there</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://cdn.pixabay.com/photo/2023/08/02/02/46/woman-8164186_1280.jpg" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello there</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://cdn.pixabay.com/photo/2023/08/02/02/46/woman-8164186_1280.jpg" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello there</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://cdn.pixabay.com/photo/2023/08/02/02/46/woman-8164186_1280.jpg" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello there</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://cdn.pixabay.com/photo/2023/08/02/02/46/woman-8164186_1280.jpg" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello there</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
