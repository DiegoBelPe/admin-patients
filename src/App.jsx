import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import ListPatients from './components/ListPatients'

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  const [paciente, setPaciente] = useState({})

  

  useEffect(() => {
    const setStorage = () => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes))
    }
    setStorage();
  }, [pacientes])

  const handleDelete = (id) => {
    const newPacientes = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(newPacientes)
  }

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
        handleDelete={handleDelete}
      />
      </div>
    </div>
  )
}

export default App
