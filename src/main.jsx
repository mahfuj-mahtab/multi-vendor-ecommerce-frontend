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
import AllOrder from './components/AllOrder.jsx';
import VendorOrder from './components/VendorOrder.jsx';
import VendorAllProduct from './components/VendorAllProduct.jsx';
import VendorSingleProduct from './components/VendorSingleProduct.jsx';
import VendorProductAdd from './components/VendorProductAdd.jsx';
import Order from './components/Order.jsx';

    
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/single/product/:p_id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/vendor/orders/" element={<VendorOrder  />} />
          <Route path="/vendor/all/products" element={<VendorAllProduct  />} />
          <Route path="/vendor/product/add" element={<VendorProductAdd  />} />
          <Route path="/vendor/product/:p_id" element={<VendorSingleProduct  />} />
          <Route path="/order" element={<Order  />} />


        </Routes>
      

    </BrowserRouter>
    
  
)
