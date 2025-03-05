import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import SingleProduct from './components/SingleProduct.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Profile from './components/Profile.jsx';

    
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/single" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      

    </BrowserRouter>
    
  
)
