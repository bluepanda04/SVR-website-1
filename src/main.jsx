import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter , Route , Routes} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import ProductPage from './components/ProductPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/Products' element={<ProductPage/>}></Route>
    <Route path='/ProductDetails/:type' element={<ProductDetail/>}></Route>
  </Routes>
  </BrowserRouter>
)
