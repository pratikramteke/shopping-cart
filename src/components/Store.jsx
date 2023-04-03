import React from "react"
import storeItems from "../data/items.json"

export default function Store() {
  return (
    <>
      <div>Store</div>
      <div>
        {storeItems.map((item) => {
          return <div>{JSON.stringify(item)}</div>
        })}
      </div>
    </>
  )
}
