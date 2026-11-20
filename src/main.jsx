import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import Articles from './pages/Articles';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:id" element={<Articles />} />
      <App />
    </Routes>
  </BrowserRouter>,
);
