import React from 'react'
import Product from './Product';
import "./ProductTab.css"

export default function ProductTab() {
  return (
    <div>
      <Product productName="Logitech MX Master 3S" description={["8,000 DPI", "5 Programmable Button"]} oldPrice={12495} newPrice={8999} />

    <Product productName="Logitech MX Master 3S" description={["8,000 DPI", "5 Programmable Button"]} oldPrice={12495} newPrice={8999} />
    </div>
  )
}
