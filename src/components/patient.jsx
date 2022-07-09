import React from 'react'

const patient = ({paciente, setPaciente}) => {

  const {name, propietario, email, fechaAlta, sintomas} = paciente;
  return (
      <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Nombre: 
          <span className='font-normal normal-case'> {name} </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Propietario: 
          <span className='font-normal normal-case'> {propietario} </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Email: 
          <span className='font-normal normal-case'> {email} </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Fecha Alta: 
          <span className='font-normal normal-case'> {fechaAlta} </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Sintomas: 
          <span className='font-normal normal-case'> {sintomas} </span>
        </p>
        <div>
          <button
            onClick={() => setPaciente(paciente)}
            type='button'
            className='bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white font-bold uppercase rounded-lg'
          >
            Editar
          </button>
          <button
            className='bg-red-500 hover:bg-red-600 py-2 px-4 text-white font-bold uppercase rounded-lg ml-5'
            type='button'
          >
            Eliminar
          </button>
        </div>
    </div>
  )
}

export default patient