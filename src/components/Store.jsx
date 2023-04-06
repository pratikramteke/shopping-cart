import React from "react"
import storeItems from "../data/items.json"
import StoreItems from "./StoreItems"

export default function Store() {
  return (
    <>
      <div className="text-3xl mx-10 my-5">Store</div>
      <div className="text-2xl mx-10 my-5 flex gap-5 flex-col lg:flex-row">
        {storeItems.map((item) => (
          <StoreItems {...item} key={item.id } />
        ))}
      </div>
    </>
  )
}
