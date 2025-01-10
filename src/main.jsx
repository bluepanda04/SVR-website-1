import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter , Route , Routes} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import ProductPage from './components/ProductPage.jsx'
import Contact from './components/Contact.jsx'
import Downloads from './components/Downloads.jsx'
import Events from './components/Events.jsx'
import Careers from './components/Careers.jsx'
import Support from './components/Support.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/Products' element={<ProductPage/>}></Route>
    <Route path='/ProductDetails/:type' element={<ProductDetail/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Downloads' element={<Downloads/>}></Route>
    <Route path='/Events' element={<Events/>}></Route>
    <Route path='/Careers' element={<Careers/>}></Route>
    <Route path='/Support' element={<Support/>}></Route>
  </Routes>
  </BrowserRouter>
)
