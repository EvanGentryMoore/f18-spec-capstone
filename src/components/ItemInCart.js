import React, {useContext, useState} from 'react'
import {CartContext} from '../App'
import './ItemInCart.css'

function ItemInCart({item}) {
  const {cart, setCart} = useContext(CartContext)
  const [count, setCount] = useState(1)

  const removeItem = () => {
    setCart(() => {
      let newRef = [...cart]
      let index = newRef.indexOf(item)
      newRef.splice(index, 1)
      return newRef
    })
  }
  const increase = () => (count >= 20) ? setCount(20) : setCount(count + 1)
  const decrease = () => (count <= 1) ? setCount(1) : setCount(count - 1)

  const math = count * item.item_price

  return (
    <div className='item-card'>
      <div className='item-title'>
        <p>{item.item_name}</p>
      </div>
      <div className='item-counter-container'>
        <div className='item-counter'>
          <button onClick={decrease} className="button-down">-</button>
          <span className='counter-display'>{count}</span>
          <button onClick={increase} className="button-up">+</button>
        </div>
        <div>X ${item.item_price} = ${math}</div>
      </div>
      <button className="cart-remove" onClick={removeItem}>Remove from cart</button>
    </div>
  )
}

export default ItemInCart