import React from 'react'

export const Error = ({msg}) => {
  return (
    <div className='bg-red-500  rounded-lg p-4 font-semibold shadow-sm text-white uppercase w-1/2 mx-auto mt-4'>{msg}</div>
  )
}
