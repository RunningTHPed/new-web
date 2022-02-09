import React from 'react';
import './App.css';
import NavBar from './components/Navbar/index';
import Footer from './components/Footer/footer';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
