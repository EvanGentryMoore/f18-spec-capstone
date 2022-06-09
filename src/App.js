import React, {useState, createContext} from 'react'
import {Link, Outlet} from 'react-router-dom'

import './App.css';

const CartContext = createContext()

function App() {
  const [renderHome, setRenderHome] = useState(true)
  const [cart, setCart] = useState({
    drinkCart: [], 
    entreeCart: [],
    sideCart: [] 
})

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <header className="nav-bar">
        <Link to='/' className='nav-links' onClick={() => setRenderHome(true)}><h1>Site Logo</h1></Link>
        <nav className='nav-section'>
          <Link to='/menu' className='nav-links'onClick={() => setRenderHome(false)}>Menu</Link>|
          <Link to='/cart' className='nav-links'onClick={() => setRenderHome(false)}>Cart</Link>
        </nav>
      </header>
      {renderHome ? <h1>Place Holder for Home Component</h1> : <Outlet />}
    </CartContext.Provider>
  )
}

export default App;
export {CartContext}