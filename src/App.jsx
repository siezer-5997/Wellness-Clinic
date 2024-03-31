// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
// import Home from './Home'; // Your home component
import Services from './Services'; // Your services component
import About from './About'; // Your about component
import Contact from './Contact'; // Your contact component
import Login from './Login'; // Your login component

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
