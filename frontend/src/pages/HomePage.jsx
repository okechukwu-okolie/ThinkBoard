import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar.jsx'
import RateLimitingUI from '../components/RateLimitingUI.jsx'
import axios from 'axios'
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard.jsx'

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

useEffect(() => {
  const fetchNotes = async () => {
    //using fetch API to get notes from backend
    // try { 
    //   const res =await fetch('http://localhost:5005/api/notes')
    //   const data = await res.json()
    //   console.log('Fetched notes:', data)
    //   setNotes(data)
    // }
    // catch (error) {
    //   console.error('Error fetching notes:', error)
    //   if (error.response && error.response.status === 429) {
    //     setIsRateLimited(true)
    //   }
    // }

    //uisng axios to get notes from backend
    try { 
      const res =await axios.get('http://localhost:5005/api/notes')
      const data = await res.data
      console.log('Fetched notes:', data)
      setNotes(data)
    }
    catch (error) {
      console.error('Error fetching notes:', error)
      if (error.response && error.response.status === 429) {
        setIsRateLimited(true)
      }else{
        toast.error('Error fetching notes')
      }
    }
    finally{
      setLoading(false)
    }
  }
  fetchNotes()
},[])

  return (
    <div className='min-h-screen'>
      <NavBar />
      {isRateLimited && <RateLimitingUI />}
      <div className='max-w-7xl mx-auto p-4 mt-6'>
         {loading && <div className='text-center text-primary py-10'>Loading notes...</div>}


         {notes.length > 0 && !isRateLimited &&(
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
             {
              notes.map(note => (
                <NoteCard key={note._id} note={note} />
              ))
             }
          </div>
         )}
      </div>
    </div>
  )
}

export default HomePage
