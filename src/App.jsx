import { useState,useEffect} from 'react'
import './App.css'
import {Routes,Route,useNavigate,useLocation,Navigate} from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/Home/Home'
import Cart from './pages/Cart'
import Error404 from './pages/Error404'
import Login from './pages/Login'
import Register from './pages/Register'
import SingleProduct from './components/singleproduct/SingleProduct'
import { Toaster } from 'react-hot-toast'
import {useSelector} from "react-redux"
import Categoryitem from './components/Categoryitem'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'


function App() {
  const navigate = useNavigate()
  const user = /*useSelector((state)=>state.user.currentUser)*/true ;

  const location = useLocation()
  const {pathname}=location

  const excludedPaths =['login','register']
  return (
      <div>
       {!excludedPaths.includes(window.location.pathname.split('/')[1]) && <Navbar />}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/category" element={<Categoryitem/>}/>
          <Route path="/products/:id" element={<SingleProduct/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
       {!excludedPaths.includes(window.location.pathname.split('/')[1]) && <Newsletter/>}
       {!excludedPaths.includes(window.location.pathname.split('/')[1]) && <Footer />}
        <Toaster/>
      </div>
    
  )
}

export default App;
