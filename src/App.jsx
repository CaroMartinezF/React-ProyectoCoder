/* import { useState } from 'react' */
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="¡Bienvenida a Eleva Fit!"/>
    </>
  )
}

export default App
