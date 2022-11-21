
import './App.css';
import Navbar from './components.js/Navbar';
import Home from './components.js/Home';
import Menu from './components.js/Menu';
import OurStory from './components.js/OurStory';
import Hiking from './components.js/Hiking';
import ContactUs from './components.js/ContactUs';
import Title from './components.js/Title';
import Footer from './components.js/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/story" element={<OurStory/>} />
          <Route exact path="/hiking" element={<Hiking/>} />
          <Route exact path="/contact" element={<ContactUs/>} />
          <Route exact path="/title" element={<Title/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>,
    </>
  );
}

export default App;
