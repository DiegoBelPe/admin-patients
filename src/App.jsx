import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import ListPatients from './components/ListPatients'

function App() {
  const [pacientes, setPacientes] = useState([])

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className='mt-10 md:flex'>
      <Form 
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
      <ListPatients 
        pacientes={pacientes}
      />
      </div>
    </div>
  )
}

export default App
