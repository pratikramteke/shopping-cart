import React from "react"
import storeItems from "../data/items.json"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

export default function CartItem({ id, quantity }) {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find((i) => i.id === id)
  const total = 0
  if (item == null) return null
  return (
    <>
      <div className="flex my-2 gap-1 items-center justify-between lg:justify-start">
        <img src={item.imgurl} width={100} height={100} alt="" />
        <div className="flex items-center">
          <div className="flex flex-col mr-3">
            <span>{item.name}</span>{" "}
            <span className="text-sm">{formatCurrency(item.price)}</span>
          </div>
          x <span className="ml-1 text-sm lg:text-xl mt-1 lg:mr-5 ">{quantity}</span>
        </div>
        <div>
          {formatCurrency(item.price * quantity)}
          <button
            className="bg-red-500 text-white w-10 ml-1 text-lg rounded-md"
            onClick={() => removeFromCart(id)}
          >
            X
          </button>
        </div>
      </div>
    </>
  )
}
