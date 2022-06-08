import React, {useContext} from 'react'
import {CartContext} from '../App'
import ItemInCart from './ItemInCart'

function Cart() {
  const {cart, setCart} = useContext(CartContext)

  return (
    <div>Cart
      <ItemInCart />
    </div>
  )
}

export default Cart