import React from 'react';

const CommentDetail = ({author, avatar, post}) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">Today: 6:00PM</span>
        </div>
        <div className="text">{post}</div>
      </div>
    </div>
  );
};

export default CommentDetail;