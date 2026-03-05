import React, { useState } from 'react'
import { Link } from 'react-router'
import { ArrowLeftIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import axios from 'axios'
const CreatePage = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    //
    if(!title.trim() || !content.trim()){
      toast.error('Title and content cannot be empty')
      return
  }

  setLoading(true)
  const createNote = async () => {
    try {
      const res = await axios.post('http://localhost:5005/api/notes', { title, content })
      const data = await res.data
      toast.success('Note created successfully')
      setTitle('')
      setContent('')
    } catch (error) {
      toast.error('Failed to create note')
      console.log('Post unsuccessfull',error)
    } finally {
      setLoading(false)
    }
  }
createNote()
}

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <Link to='/' className='btn btn-ghost mb-6'>
            <ArrowLeftIcon className='size-5' />
            back to Notes
          </Link>

          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create a New Note</h2 >
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label htmlFor="" className='label'>
                    <span className='label-text'>Title</span>
                  </label>
                  <input type="text" placeholder='Note Title'  className='input input-bordered'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  />
                </div>


                <div className="form-control mb-4">
                  <label htmlFor="" className='label'>
                    <span className='label-text'>Content</span>
                  </label>
                  <textarea placeholder='Write your note here...'  className='textarea textarea-bordered h-32'
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="card-actions justify-end">
                  <button type='submit' className='btn btn-primary' disabled={loading}
                  >
                    {loading ? 'Creating...' : 'Create a Note'}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default CreatePage
