import React from 'react'

function MenuItem() {
  return (
    <ul className='item-list'>
        {beverages.map((item) => 
          <li className='item-details' key={item.item_id}>
            <div className='item-name'>
              {item.item_name}
            </div>
            <div className='item-price'>
              $ {item.item_price}
            </div>
            {/* <button onClick={() => }>
            </button> */}
          </li>
        )}
      </ul>
  )
}

export default MenuItem