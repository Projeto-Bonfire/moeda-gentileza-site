import informations2 from './assets/informations2';
import informations from './assets/informations';
import Container2 from './components/Container2';
import Container from './components/Container';
import Nav from './components/Nav';

import './index.css';


function App() {
  return (
    <>
      <Nav />
      {
       informations2.map((item, index) => <Container2 key={index} image={item.image} description={item.description} title={item.title}/>)
     }
      {
        informations.map((item, index) => <Container key={index} image={item.image} description={item.description} title={item.title}/>)
      }
    </>
  )
};

export default App;
