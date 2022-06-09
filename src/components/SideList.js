import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MenuItem from './MenuItem.js'

import './Lists.css'

const baseURL = 'http://localhost:3003'

function SideList() {
  const [listData, setListData] = useState([])
  
  useEffect(() => {
    axios.get(`${baseURL}/menu`)
    .then(res => {
      let menuData = res.data[0]
      setListData(menuData.filter(element => element.item_type === "side").sort((a, b) => a.item_id - b.item_id))
    })
    .catch(err => console.log(err))
  }, [])
  
  return (
    <div>
      <h1 className="menu-title">Sides</h1>
      {listData.map((item, index) => {
        return (
          <MenuItem
            key={index}
            id={item.item_id}
            item={item}
            inCart={false}
          />
        )
      })}
    </div>
  )

}

export default SideList