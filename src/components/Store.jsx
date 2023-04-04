import React from "react"
import storeItems from "../data/items.json"
import StoreItems from "./StoreItems"

export default function Store() {
  return (
    <>
      <div>Store</div>
      <div>
        {storeItems.map((item) => (
          <StoreItems {...item} />
        ))}
      </div>
    </>
  )
}
