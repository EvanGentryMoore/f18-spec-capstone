import React, {useState, createContext} from 'react'
import {Link, Outlet} from 'react-router-dom'
import './App.css';

const CartContext = createContext()
const UserContext = createContext()

function App() {
  const [renderHome, setRenderHome] = useState(true)
  const [cart, setCart] = useState([])
  const [user, setUser] = useState('')


  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <UserContext.Provider value={{ user, setUser }}>
        <header className="nav-bar">
          <Link to='/' className='nav-links' onClick={() => setRenderHome(true)}><h1>Site Logo</h1></Link>
          <nav className='nav-section'>
            <Link to='/login' className='nav-links'onClick={() => setRenderHome(false)}>Login</Link>|
            <Link to='/menu' className='nav-links'onClick={() => setRenderHome(false)}>Menu</Link>|
            <Link to='/cart' className='nav-links'onClick={() => setRenderHome(false)}>Cart</Link>
          </nav>
        </header>
        {renderHome ? <p>You're on the home page</p> : <Outlet />}
      </UserContext.Provider>
    </CartContext.Provider>
  )
}

export default App;
export {CartContext, UserContext}