import React, {useContext} from 'react'
import {CartContext} from '../App'
import './MenuItem.css'


function MenuItem({item}) {
  const {cart, setCart} = useContext(CartContext)

  const cartHandler = (item) => {
    setCart(() =>{
      const copyCart = [...cart.drinkCart]
      copyCart.push(item)
      return copyCart
    })
  }

  const checkCart = () => {
    console.log(cart)
  }

  return (
    <ul className='item-list'>
      <li className='item-details'>
        <div className='item-name'>
          {item.item_name}
        </div>
        <div className='item-price'>
          ${item.item_price}
        </div>
        <button onClick={cartHandler}>Add To Cart</button>
        <button onClick={checkCart}>Check Cart</button>
      </li>
    </ul>
  )
}

export default MenuItem