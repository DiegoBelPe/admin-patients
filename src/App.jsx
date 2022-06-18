import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className='mt-10 md:flex'>
      <Formulario />
      <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
