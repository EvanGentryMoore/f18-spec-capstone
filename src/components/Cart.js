import React, {useContext} from 'react'
import {CartContext} from '../App'
import ItemInCart from './ItemInCart'

function Cart() {
  const {cart} = useContext(CartContext)

  return (
    <div>
      {cart.map((item, index) => {
        return (
          <ItemInCart
            key={index}
            id={item.item_id}
            item={item}
          />
        )
      })}
    </div>
  )
}

export default Cart