import React from 'react'
import "./product.css"

export default function Product({productName, description, oldPrice, newPrice}) {
  return (
    <div className='Product'>
      <h2>{productName}</h2>
      {description.map((desc) => <li>{desc}</li>)}
      <div className='price'>
        <span><sup>₹</sup><strike>{oldPrice}</strike></span>   <span><sup>₹</sup>{newPrice}</span>
      </div>

    </div>
  )
}
