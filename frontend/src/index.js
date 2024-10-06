import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio';
import Error from './pages/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projet/:id' element={<Portfolio />} />
            <Route path='*' element={<Error />} />
          </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);


