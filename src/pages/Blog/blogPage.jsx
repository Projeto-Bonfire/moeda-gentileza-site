import React from 'react';
import Header from './components/blogHeader';
import PostList from './components/blogPostList'; 
import './styles.css';

const BlogPage = () => {
  const posts = [
    {
      title: 'Postagem 1',
      content: 'Conteúdo da primeira postagem.',
      date: '2023-07-16',
    },
    {
      title: 'Postagem 2',
      content: 'Conteúdo da segunda postagem.',
      date: '2023-07-17',
    },
    // Adicione mais postagens conforme necessário
  ];

  return (
    <div className="app">
      <Header />
      <PostList posts={posts} />
    </div>
  );
};

export default BlogPage;