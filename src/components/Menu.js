import React from 'react'
import DrinkList from './DrinkList'

import "./Menu.css"

function Menu() {
  return (
    <div className='menu'>
      <DrinkList />
      {/* <EntreeList />
      <SideList /> */}
    </div>
  )
}

export default Menu