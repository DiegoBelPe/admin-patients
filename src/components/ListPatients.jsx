
import Patient from './patient'

const ListadoPacintes = ({pacientes, setPaciente, handleDelete})=>{
  return (
  <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll '>
    {pacientes && pacientes.length ? (
    <>
      <h2 className='font-black text-3xl text-center'>Listado de pacientes</h2>
      <p className='text-center mt-5 font-bold mb-5'>Administra tus pacientes <span className='text-blue-700'>Pacientes y Citas</span></p>

      {pacientes.map(paciente => (
        <Patient 
        key={paciente.id}
        paciente={paciente}
        setPaciente={setPaciente}
        handleDelete={handleDelete}
        />

      ))}
    
    </>
    ) : (
    <>
        <h2 className='font-black text-3xl text-center'>No existen pacientes</h2>
        <p className='text-center mt-5 font-bold mb-5'>Agrega pacientes <span className='text-blue-700'>en tu lista</span></p>
    
    </>
    )}
    
    
  </div>
  )
}

export default ListadoPacintes;