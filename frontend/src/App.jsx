import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import PageDoesNotExist from './pages/PageDoesNotExist.jsx'

const App = () => {
  return (
    <div data-theme="coffee" className="min-h-screen flex flex-col justify-center items-center gap-2">
        <button className="btn">Button</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
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