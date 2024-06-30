import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  const [cartCount,setCartCount] = useState(5)

  return (
    <>
    <NavBar cartCount= {cartCount} tittle="Tu Mejor Lista"/>
    <ItemListContainer greetings= "Bienvenido a Tu Mejor Lista de Precios Apps"/>
    </>
  );
}

export default App
