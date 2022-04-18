import React from 'react'
import { EmojiSadIcon, LoginIcon } from "@heroicons/react/outline";
import { Link } from 'react-router-dom';



export const NotFound = () => {
  return (
    <div className="bg-slate-800 flex items-center h-screen justify-center flex-col h-screen">
                <p><EmojiSadIcon className='text-orange-500 h-24'/></p>
        <div className="font-black text-7xl  bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-100 p-2 tracking-wider uppercase">
            404 Nothing Found!!!
        </div>
        <Link to="/" className='text-slate-300 text-3xl hover:text-slate-100 font-semibold tracking-widest mt-8 flex-row'><LoginIcon className='h-20 mx-auto'/> Back login page</Link>
    </div>

  )
}
