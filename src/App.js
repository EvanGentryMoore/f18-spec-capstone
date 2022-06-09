import React, {useState, createContext} from 'react'
import {Link, Outlet} from 'react-router-dom'

import './App.css';

const CartContext = createContext()
const ToggleContext = createContext()

function App() {
  const [renderHome, setRenderHome] = useState(false)
  const [cart, setCart] = useState([])
  const [toggle, setToggle] = useState(false)

  return (
    <CartContext.Provider value={{ cart, setCart }}>
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      <header className="nav-bar">
        <Link to='/' className='nav-links' onClick={() => setRenderHome(true)}><h1>Site Logo</h1></Link>
        <nav className='nav-section'>
          <Link to='/menu' className='nav-links' onClick={() => setRenderHome(false)}>Menu</Link>|
          <Link to='/cart' className='nav-links' onClick={() => setRenderHome(false)}>Cart</Link>
        </nav>
      </header>
      {renderHome ? <h1>Place Holder for Home Component</h1> : <Outlet />}
    </ToggleContext.Provider>
    </CartContext.Provider>
  )
}

export default App;
export {CartContext, ToggleContext}