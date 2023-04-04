import React from "react"

export default function StoreItems({ id, name, price, url }) {
  return (
    <div>
      <img src={url} alt="" />
      <h1>{name}</h1>
      <h2>{price}</h2>
      <button>Add to Cart</button>
    </div>
  )
}
