import Nav from '../components/Nav';
import Post from '../components/blogPost'
import PostList from '../components/blogPostList'
import '../styles/index.css';


function Blog() {
    return (
        <>
            <Nav />
            <Post />
            <PostList />
        </>

    );
};

export default Blog