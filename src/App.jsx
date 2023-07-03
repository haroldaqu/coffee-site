// React
import './App.css'

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

function App() {

  return (
    <Router>
      <Navbar />
      <Routes >
        <Route exact path="/" element={<Home /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/products" element={<Products /> } />
        <Route path="/contact" element={<Contact /> } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
