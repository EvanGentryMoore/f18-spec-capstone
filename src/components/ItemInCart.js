import React from 'react'
import './ItemInCart.css'

function ItemInCart() {
  return (
    <div className='item-card'>
      <div className='item-title'>
        <h3>item name</h3>
      </div>
      <div className='item-counter-container'>
        <div className='item-counter'>
          <a className="button-down">-</a>
          <span className='counter-display'>88</span>
          <a className="button-up">+</a>
        </div>
      </div>
      <div>X     Unit Price = Total for item</div>
      <button className="cart-remove">Remove from cart</button>
    </div>
  )
}

export default ItemInCart