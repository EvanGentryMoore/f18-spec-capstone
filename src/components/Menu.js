import React, {useContext} from 'react'
import {CartContext} from '../App'
import DrinkList from './DrinkList'
import EntreeList from './EntreeList'
import SideList from './SideList'

import "./Menu.css"

function Menu() {
  const {cart, setCart} = useContext(CartContext)

    // useEffect(() => {

    // }, [])
  

  return (
    <div className='background'>
      <div className='menu'>
        <DrinkList />
        <EntreeList />
        <SideList />
      </div>
    </div>
  )
}

export default Menu