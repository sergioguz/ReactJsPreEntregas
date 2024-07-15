import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav>
        <h1>Ecomerce</h1>
        <section>
            <Link to="/category/Canasta Basica"> Canasta Basica </Link>
            <Link to="/category/Lacteos"> Lacteos </Link>
            <Link to="/category/Navidad"> Navidad </Link>
        </section>
        <CartWidget/>
    </nav>
  )
}

export default NavBar