import React, { useState } from 'react'
import { Link } from 'react-router'
import {Moon, PlusIcon, Sun} from 'lucide-react'
const NavBar = ({themeFunction,control}) => {
    const [edited, setEdited] = useState(false)
    const [deleted, setDeleted] = useState(false)
  return (
    <header  className='bg-base-300 border-b border-base-content/10'>
        <div className='mx-auto max-w-6xl p-4'>
            <div className="flex items-center justify-between">
                <h1 className='text-3xl font-bold text-primary font-mono tracking-tight'>
                    ThinkBoard
                </h1>
                <div className='flex items-center gap-4'>
                    {control ? <Sun className='size-5 cursor-pointer' onClick={themeFunction} /> : <Moon className='size-5 cursor-pointer' onClick={themeFunction} />}
                    <Link to={'/create'} className='btn btn-primary'>
                        <PlusIcon className='size-5 ' />
                        <span>New Note</span>
                    </Link>
                </div>
            </div>
            
        </div>
    </header>
  )
}

export default NavBar