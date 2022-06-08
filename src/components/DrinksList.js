import React, {useEffect} from 'react'
import axios from 'axios'
import MenuItem from './MenuItem.js'

import './DrinksList.css'

const baseURL = 'http://localhost:3003'


function DrinksList() {
  
  useEffect(() => {
    axios.get(`${baseURL}/menu`)
    .then(res => {
      let menuData = res.data[0]
      setBeverages(menuData.filter(element => element.item_type === "drink").sort((a, b) => a.item_id - b.item_id))
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1 className='menu-title-drinks'>Drinks</h1>
      <MenuItem />
    </div>
  )
}

export default DrinksList