import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Careers from './pages/careers/Careers';
import Contact from './pages/contact/Contact';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import NotFoundPage from './pages/NotFoundPage';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (

      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home loading={loading} />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
