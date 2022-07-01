import React from 'react'
import Patient from './patient'

const ListadoPacintes = ()=>{
  return (
  <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll '>
    <h2 className='font-black text-3xl text-center'>Listado de pacientes</h2>
    <p className='text-center mt-5 font-bold mb-5'>Administra tus pacientes <span className='text-blue-700'>Pacientes y CItas</span></p>

    <Patient />
    <Patient />
    <Patient />
    <Patient />
    <Patient />
    <Patient />
    <Patient />
    <Patient />
    <Patient />
    <Patient />
    
  </div>
  )
}

export default ListadoPacintes;