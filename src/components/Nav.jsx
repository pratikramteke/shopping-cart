import { Link } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export default function Nav() {
  const {getCount} = useShoppingCart()
  return (
    <nav className="text-xl py-3 bg-white shadow-md">
      <ul className="flex gap-10 mx-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart {getCount() == 0 ? "" : <span className="bg-red-600 text-white rounded-full px-2">{getCount()}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
