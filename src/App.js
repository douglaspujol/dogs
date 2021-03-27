import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
import Home from './Components/Home/index';
import Login from './Components/Login/index';
import GlobalStyle from './Styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
