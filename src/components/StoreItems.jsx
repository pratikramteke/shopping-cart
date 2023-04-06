import React from "react"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

export default function StoreItems({ id, name, price, imgurl }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const qty = getItemQuantity(id)
  return (
    <div className="border border-2">
      <img src={imgurl} alt="" className="object-cover h-60 w-96" />
      <div className=" px-3 mb-1">
        <div className="flex justify-between my-4">
          <span>{name}</span>
          <span>{formatCurrency(price)}</span>
        </div>
        {qty === 0 ? (
          <button
            className="bg-blue-600 w-full h-12 rounded-lg text-white"
            onClick={() => increaseCartQuantity(id)}
          >
            Add to Cart
          </button>
        ) : (
          <div className="text-center">
            <div>
              <button
                className="bg-blue-600 w-16 h-12  rounded-md text-white"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <span className="mx-2">{qty} in cart</span>
              <button
                className="bg-blue-600 w-16 h-12  rounded-md text-white"
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
            </div>
            <button
              className="bg-red-500 w-24 h-10 my-3  rounded-md text-sm text-white"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
