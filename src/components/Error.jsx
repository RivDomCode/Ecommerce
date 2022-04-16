import React from 'react'

export const Error = ({msg}) => {
  return (
    <div className='bg-red-500 w-4/5  rounded-lg p-4 font-semibold shadow-lg text-white uppercase mx-auto mt-4'>{msg}</div>
  )
}
