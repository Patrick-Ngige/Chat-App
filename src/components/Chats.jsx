// import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../firebase';
// import { AuthContext } from '../context/AuthContext';

const Chats = () => {

  // const [chats,setChats] = useState([]);

  // const [currentUser] = useContext(AuthContext);

  // useEffect(() => {
  //   const getChats = () => {
  //     const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
  //       setChats(doc.data());
  //     })
  
  //     return () => {
  //       unsub();
  //     }
  //   }

  //   currentUser.uid && getChats();
  // }, [currentUser.uid])

  // console.log(chats)
  return (
    <div className='chats'>
      {/* {Object.entries(chats)?.map((chat) => ( */}
        <div className="userChat" >
        <img src="https://images.unsplash.com/photo-1697059492638-ea45a2493ec4?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&w=600" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      {/* ))} */}
    </div>
  )
}

export default Chats
