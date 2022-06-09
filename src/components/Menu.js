import React, {useContext} from 'react'
import {CartContext} from '../App'
import DrinkList from './DrinkList'

import "./Menu.css"

function Menu() {
  const {cart, setCart} = useContext(CartContext)

    // useEffect(() => {

    // }, [])
  

  return (
    <div className='menu'>
      <DrinkList />
      {/* <EntreeList />
      <SideList /> */}
    </div>
  )
}

export default Menu