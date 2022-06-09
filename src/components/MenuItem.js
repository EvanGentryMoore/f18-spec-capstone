import React, {useContext, useState, useEffect} from 'react'
import {CartContext} from '../App'
import './MenuItem.css'


function MenuItem({item}) {
  const {cart, setCart} = useContext(CartContext)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const toggleCheck = cart.find(cartItem => cartItem.item_name === item.item_name)
    if(toggleCheck){
      setToggle(true)
    }
  }, [])

  const cartHandler = () => {
    if(!cart.includes(item)){
      setToggle(true)
      setCart(() => {
        const copyCart = [...cart]
        copyCart.push(item)
        return copyCart
      })
    } else {
      setToggle(false)
      let index = cart.indexOf(item)
      cart.splice(index, 1)
      return cart
    }
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
        <button onClick={cartHandler}>{!toggle ? 'Add to Cart' : 'Remove Item'}</button>
      </li>
    </ul>
  )
}

export default MenuItem