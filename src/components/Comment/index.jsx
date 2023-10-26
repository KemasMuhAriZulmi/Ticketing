import React from 'react';

const Comment = ({ avatar, username, content }) => {
  return (
    <div className="flex items-start mb-2">
      <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
      <div>
        <h2 className="font-bold">{username}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Comment;
