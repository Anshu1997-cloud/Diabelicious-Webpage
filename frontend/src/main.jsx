import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import About from './Pages/About us/About';
import Home from './Pages/Home/Home'
import LoginSignUp from './Pages/LoginSignUp/LoginSignUp';
import Mentorship from './Pages/Mentorship/Mentorship';
import Personalised from './Pages/Personalised-delivery/Personalised';
import Pricing from './Pages/Pricing/Pricing';
import Blog from './Pages/Blog/Blog';
import Faq from './Pages/FAQ/Faq';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home/>}/> 
  <Route path='about' element={<About/>}/> 
  <Route path="LoginSignUp" element={<LoginSignUp/>}/> 
  <Route path="Mentorship" element={<Mentorship/>}/> 
  <Route path="Personalised" element={<Personalised/>}/> 
  <Route path="pricing" element={<Pricing/>}/> 
  <Route path="Blog" element={<Blog/>}/>
  <Route path="faq" element={<Faq/>}/>
  </Routes>
</BrowserRouter>
)
