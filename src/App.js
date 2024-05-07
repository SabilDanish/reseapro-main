import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/blogs' element={<Blog />}/>
        <Route path='/careers' element={<Careers />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
