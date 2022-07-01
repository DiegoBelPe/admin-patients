import { useState } from 'react'

const Formulario = () => {
  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }
  console.log(name);
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-center mt-5 font-bold mb-5'>Añade pacientes y <span className='text-blue-700'>Administralos</span></p>

      <form action="" className='bg-white shadow-md rounded-lg py-10 px-5'>
        <div className='mb-3'>
          <label htmlFor='mascota' className='block uppercase text-gray-700 font-bold'>Nombre de la mascota</label>
          <input 
          id='mascota'
          className='border-2 w-full p-2 mt-2 placeholder:text-gray-500 rounded-md'
          type='text' 
          placeholder='Nombre de la Mascota' 
          onChange={handleChange}
          />
          
        </div>
        <div className='mb-3'>
          <label htmlFor='propietario' className='block uppercase text-gray-700 font-bold'>Nombre del Propietario</label>
          <input 
          id='propietario'
          className='border-2 w-full p-2 mt-2 placeholder:text-gray-500 rounded-md'
          type='text' 
          placeholder='Nombre del propietario' />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='block uppercase text-gray-700 font-bold'>Email</label>
          <input 
          id='email'
          className='border-2 w-full p-2 mt-2 placeholder:text-gray-500 rounded-md'
          type='email' 
          placeholder='Email' />
        </div>
        <div className='mb-3'>
          <label htmlFor='alta' className='block uppercase text-gray-700 font-bold'>Alta</label>
          <input 
          id='alta'
          className='border-2 w-full p-2 mt-2 placeholder:text-gray-500 rounded-md'
          type='date' />
        </div>
        <div className='mb-3'>
          <label htmlFor='sintomas' className='block uppercase text-gray-700 font-bold'>Sintomas</label>
          < textarea 
          id='sintomas'
          className='border-2 w-full p-2 mt-2 placeholder:text-gray-500 rounded-md'
          placeholder='Descripcion de sintomas' />
        </div>
        <input 
        type="submit"
        className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md uppercase cursor-pointer mb-5'
        value="Añadir paciente" />

      </form>
    </div>
  )
}

export default Formulario