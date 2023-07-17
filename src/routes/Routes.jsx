import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from '../components/Cookies';
import Term from '../pages/UseTerm';
import Home from '../pages/Home';
import Blog from '../pages/Blog';

function Redirect() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path='/termos-de-uso' element={<Term />} />
                <Route path='/blog' element={<Blog />} />
            </Routes>
            <Cookies />
        </Router>
    );
}

export default Redirect