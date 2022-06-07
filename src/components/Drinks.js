import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './Drinks.css'

const baseURL = 'http://localhost:3003'


function Drinks() {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    axios.get(`${baseURL}/menu`)
    .then(res => {
      let menuData = res.data[0]
      setDrinks(menuData.filter(element => element.item_type === "drink").sort((a, b) => a.item_id - b.item_id))
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1 className='menu-title-drinks'>Drinks</h1>
      <ul className='drinks-list'>
        {drinks.map((item) => 
          <li className='drink-details' key={item.item_id}>
            <div className='drink-name'>
              {item.item_name}
            </div>
            <div className='drink-price'>
              $ {item.item_price}
            </div>
            <button>Add</button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Drinks