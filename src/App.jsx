import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import {BrowserRouter, Routes,Route} from "react-router-dom"
//import './App.css'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greetings={"Lista de Productos"}/>}></Route>
        <Route path="/category/:category" element={<ItemListContainer/>}></Route>
        <Route path="/detail/:id" element={<ItemDetailContainer/>}></Route>
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
