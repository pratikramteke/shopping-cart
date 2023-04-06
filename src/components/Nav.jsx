import { Link } from "react-router-dom"

export default function Nav() {
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
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  )
}
