import React from 'react';

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
      <img src="https://cdn.pixabay.com/photo/2023/08/02/02/46/woman-8164186_1280.jpg" alt="" />
      <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://cdn.pixabay.com/photo/2023/08/02/02/46/woman-8164186_1280.jpg" alt="" />
      </div>
    </div>
  )
}

export default Message
