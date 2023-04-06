import React from "react"
import { useShoppingCart } from "../context/ShoppingCartContext"
import CartItem from "./CartItem"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

export default function Cart() {
  const { cartItems } = useShoppingCart()
  return (
    <div className="text-lg mx-2 my-5 lg:text-3xl">
      {cartItems.map((item) => (
        <div key={item.id}>
          <CartItem key={item.id} {...item} />
        </div>
      ))}
      <div className="text-center lg:text-start">
        Total{" "}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
          const item = storeItems.find((i) => i.id === cartItem.id)
          return total + (item?.price || 0) * cartItem.quantity
        }, 0))}
      </div>
    </div>
  )
}
