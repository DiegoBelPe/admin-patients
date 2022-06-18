import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-center mt-5 font-bold mb-5'>Añade pacientes y <span className='text-blue-700'>Administralos</span></p>

      <form action="" className='bg-white shadow-md rounded-lg py-10 px-5'>
        <div>
          <label htmlFor='mascota' className='block uppercase text-gray-700 font-bold'>Nombre de la mascota</label>
          <input 
          id='mascota'
          className='border-2 w-full p-2 mt-2 placeholder:text-gray-500 rounded-md'
          type='text' 
          placeholder='Nombre de la Mascota' />
        </div>
      </form>
    </div>
  )
}

export default Formulario