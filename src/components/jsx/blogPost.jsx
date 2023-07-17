import React from 'react';
import moment from 'moment';

const Post = ({ title, content, date }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      <p className="post-date">{moment(date).format('MMMM Do YYYY')}</p>
    </div>
  );
};

export default Post;