import React from 'react';
import Post from './blogPost';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <Post key={index} title={post.title} content={post.content} date={post.date} />
      ))}
    </div>
  );
};

export default PostList;