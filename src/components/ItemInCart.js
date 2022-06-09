import React from 'react'
// import {CartContext} from '../App'
// import './ItemInCart.css'

function ItemInCart({id, item}) {
  // const {cart, setCart} = useContext(CartContext)

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
      <button className="cart-remove">Remove from cart</button>
    </div>
  )
}

export default ItemInCart