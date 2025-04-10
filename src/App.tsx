import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Servicedetail from './pages/servicedetail/Servicedetail';
import Marquee from './components/marquee/Marquee';
import HealthcareNavbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Blogdetail from './pages/blogdetail/Blogdetail';
import Notfound from './pages/notfound/Notfound';
import Terms from './pages/term/Terms';
import Privacy from './pages/privacy/Privacy';
import Cookie from './pages/cookie/Cookie';

const App = () => {
  return (
    <Router>
      <div>
        <Marquee />
        <HealthcareNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<Servicedetail/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetail" element={<Blogdetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy/>} />
          <Route path="/cookies-policy" element={<Cookie />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;