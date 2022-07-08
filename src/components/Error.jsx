import React from 'react'

const Error = ({mensaje}) => {
  return (
    <p className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-br-md'>{mensaje}</p>
  )
}

export default Error