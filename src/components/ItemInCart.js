import React, {useContext} from 'react'
import {CartContext} from '../App'
import './ItemInCart.css'

function ItemInCart({item}) {
  const {cart, setCart} = useContext(CartContext)

  const clicked = () => {
    setCart(() => {
      let index = cart.indexOf(item)
      cart.splice(index, 1)
      return cart
    })
  }

  return (
    <div className='item-card'>
      <div className='item-title'>
        <p>{item.item_name}</p>
      </div>
      <div className='item-counter-container'>
        <div className='item-counter'>
          <button className="button-down">-</button>
          <span className='counter-display'>88</span>
          <button className="button-up">+</button>
        </div>
      </div>
      <div>X ${item.item_price} = Total for item</div>
      <button className="cart-remove" onClick={clicked}>Remove from cart</button>
      <button type="submit" onClick={() => console.log(cart)}>check cart</button>
    </div>
  )
}

export default ItemInCart