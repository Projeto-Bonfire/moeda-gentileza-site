import Container from '../components/Container';
import Nav from '../components/Nav';
import Blog from '../components/blog/blog'
import Doubt from '../components/doubt/doubt'
import '../styles/index.css';


function Home() {
  return (
    <>
      <Nav />
      <Container />
      <Blog />
      <Doubt />
    </>

  );
};

export default Home