import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import PageDoesNotExist from './pages/PageDoesNotExist.jsx'
import NotesNotFound from './pages/NotesNotFound.jsx'

const App = () => {
  const [theme, setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme(!theme)
  }
  return (
    <div data-theme={theme ? 'coffee' : 'light'} className='relative h-full w-full'>
       <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)'></div>
      <Routes>
        <Route path="/" element={<HomePage theme ={toggleTheme} control={theme}  />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage  />} />
        <Route path="/note" element={<NotesNotFound />} />
        <Route path="*" element={<PageDoesNotExist />} />
      </Routes>
      
    </div> 
  )
}

export default App