// React
import './App.css'
import { useEffect, useState } from 'react';
// CSS
import './assets/css/main.min.css'

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from './layouts/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Footer from './layouts/Footer';
import ScrollToTop from './layouts/ScrollToTop';


function App() {

  const [mobileMenu, setMobileMenu] = useState(false)
  const [currentLink, setCurrentLink] = useState(1)
  const width = window.innerWidth 

  useEffect(() => {
    if (mobileMenu && width <= 786 ) {
      document.body.classList.add("active")
    } else {
      document.body.classList.remove("active")
    }
  },[mobileMenu])

  return (
    <Router>
      <ScrollToTop />
      <Navbar 
        mobileMenu={mobileMenu} 
        setMobileMenu={setMobileMenu} 
        currentLink={currentLink}
        setCurrentLink={setCurrentLink}
      />
      <Routes >
        <Route exact path="/" element={<Home 
          setCurrentLink={setCurrentLink}
        /> } />
        <Route path="/about" element={<About 
          setCurrentLink={setCurrentLink}
        /> } />
        <Route path="/products" element={<Products 
          setCurrentLink={setCurrentLink}
        /> } />
        <Route path="/contact" element={<Contact
          setCurrentLink={setCurrentLink}
        /> } />
      </Routes>
      <Footer 
        setCurrentLink={setCurrentLink}
      />
    </Router>
  )
}

export default App
