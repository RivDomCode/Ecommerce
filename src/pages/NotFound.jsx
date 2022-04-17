import React from 'react'
import { EmojiSadIcon } from "@heroicons/react/outline";


export const NotFound = () => {
  return (
    <div className="bg-slate-800 flex items-center h-screen justify-center">
                <p><EmojiSadIcon className='text-orange-500 h-24'/></p>
        <div className="font-black text-7xl  bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-100 p-2 tracking-wider uppercase">
            404 Nothing Found!!!
        </div>
    <br />

    </div>

  )
}
