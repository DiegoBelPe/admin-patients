import React from 'react'

const patient = () => {
  return (
      <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Nombre: 
          <span className='font-normal normal-case'> Hook </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Propietario: 
          <span className='font-normal normal-case'> Hook </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Email: 
          <span className='font-normal normal-case'> Hook </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Fecha Alta: 
          <span className='font-normal normal-case'> Hook </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Sintomas: 
          <span className='font-normal normal-case'> Hook </span>
        </p>
    </div>
  )
}

export default patient