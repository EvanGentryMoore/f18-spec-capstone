import React, {useState, createContext} from 'react'
import {Link, Outlet} from 'react-router-dom'
import HomePage from './components/HomePage';

import './App.css';

const CartContext = createContext()
const ToggleContext = createContext()

function App() {
  const [cart, setCart] = useState([])
  const [toggle, setToggle] = useState(false)

  const [renderHome, setRenderHome] = useState(false)

  return (
    <CartContext.Provider value={{ cart, setCart }}>
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      <header className="nav-bar">
        <Link to='/' className='nav-links' onClick={() => setRenderHome(true)}><h2>Site Logo</h2></Link>
        <nav className='nav-section'>
          <Link to='/menu' className='nav-links' onClick={() => setRenderHome(false)}>Menu</Link>|
          <Link to='/cart' className='nav-links' onClick={() => setRenderHome(false)}>Cart</Link>
        </nav>
      </header>
      {renderHome ? <HomePage /> : <Outlet />}
    </ToggleContext.Provider>
    </CartContext.Provider>
  )
}

export default App;
export {CartContext, ToggleContext}