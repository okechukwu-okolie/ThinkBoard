import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import PageDoesNotExist from './pages/PageDoesNotExist.jsx'

const App = () => {
  return (
    <div data-theme='forest'>
       
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
        <Route path="*" element={<PageDoesNotExist />} />
      </Routes>
    </div>
  )
}

export default App