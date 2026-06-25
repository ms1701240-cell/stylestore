import { useEffect, useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import ShowProducts from './Components/ShowProducts'
import Products from './Components/Products'
import CartPage from './Components/CartPage'
import Home from './Components/Home'
import { usecart } from './Components/CartContext'
import About from './Components/About'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';

function App() {
  const[prods,setprods]=useState([])
  
  const[categories,setcategories]=useState('')
  const{state}=usecart()
  useEffect(()=>{
  localStorage.setItem('savedcart',JSON.stringify(state.cart))
  },[state.cart])
 
  return (
    <>
    <Router>
       <div>
       <Nav  setcategories={setcategories} />
       <Routes>
         <Route path='/' element={<Navigate to={'/home'}/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
         <Route path='/contact' element={<Contact />}/>
          <Route path='/shopall' element={<ShowProducts prods={prods} setprods={setprods} />}/>
           <Route path='/cat' element={ <Products setprods={setprods} prods={prods} setcategories={setcategories} categories={categories} />}/>
           <Route path='/cart' element={<CartPage />}/>
       </Routes>
      </div>
    </Router>
    </>
  )
}
export default App
