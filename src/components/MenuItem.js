import React, {useContext, useState, useEffect} from 'react'
import {CartContext} from '../App'
import './MenuItem.css'


function MenuItem({item}) {
  const {cart, setCart} = useContext(CartContext)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    setToggle(JSON.parse(window.localStorage.getItem('toggle')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('toggle', toggle);
  }, [toggle]);

  // useEffect(() => {
  //   cart.includes(item) ? setToggle(true) : setToggle(false)
  // }, [])

  const cartHandler = () => {
    if(!cart.includes(item)){
      setToggle(true)
      setCart(() => {
        const copyCart = cart
        copyCart.push(item)
        return copyCart
      })
    } else {
      setToggle(false)
      let index = cart.indexOf(item)
      cart.splice(index, 1)
    }
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
        <button onClick={cartHandler}>{!toggle ? 'Add to Cart' : 'Remove Item'}</button>
        <button onClick={checkCart}>Check Cart</button>
      </li>
    </ul>
  )
}

export default MenuItem