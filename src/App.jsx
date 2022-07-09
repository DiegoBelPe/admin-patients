import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import ListPatients from './components/ListPatients'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className='mt-10 md:flex'>
      <Form 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
      <ListPatients 
        pacientes={pacientes}
        setPaciente={setPaciente}
      />
      </div>
    </div>
  )
}

export default App
