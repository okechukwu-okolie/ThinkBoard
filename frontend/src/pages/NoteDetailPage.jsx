import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import axiosInstance from '../components/libs/axios'
import toast from 'react-hot-toast'
import { ArrowLeftIcon, LoaderIcon } from 'lucide-react'

const NoteDetailpage = () => {
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(null)


  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axiosInstance.get(`/notes/${id}`)
        // const data = await res.data
        setNote(res.data)
        // setNote(data)
      } catch (error) {
        toast.error('Error fetching note')
        console.error('Error fetching note:', error)
      } finally {
        setLoading(false)
      }
  }
  fetchNote()
},[id])


   if(loading){
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className='animate-spin size-12 text-primary' />
      </div>
    )
  }
  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this note?')) return;
    try {
      await axiosInstance.delete(`/notes/${id}`)
      toast.success('Note deleted successfully')
      navigate('/')
    } catch (error) {
      toast.error('Error deleting note')
      console.error('Error deleting note:', error)
    }
  }
 

  const handleSave = async () => {
    if(!note.title.trim() || !note.content.trim()){
      toast.error('Title and content cannot be empty')
      return
    }
    setSaving(true)
    try {
      await axiosInstance.put(`/notes/${id}`, {
        title: note.title,
        content: note.content
      })
      toast.success('Note updated successfully')
    } catch (error) {
      toast.error('Error updating note')
      console.log(error)
    }finally{
      setSaving(false)
    }
  } 


  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4
       py-8'>
        {/* minimised the view area  of the page */}
        <div className="max-w-2xl mx-auto">
         <div className="flex items-center justify-between mb-6">
          <Link to='/' className='btn btn-ghost'>
          <ArrowLeftIcon className='h-5 w-5'/>
          Back to Notes
          </Link>
          <button onClick={handleDelete}>Delete Note</button>
         </div>

          <div className="card bg-base-100">
             <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input 
                type="text"
                placeholder='Note Title'
                className='input input-bordered'
                value={note?.title || ''}
                onChange={(e)=>setNote({...note, title:e.target.value})}/>
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                placeholder='Write your note here...'
                className='textarea textarea-bordered h-32'
                value={note?.content || ''}
                onChange={(e)=>setNote({...note, content:e.target.value})}
                />
              </div>

              <div className="flex card-action justify-end">
                <button className="btn btn-primary" disabled={saving} onClick={handleSave}>
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>

              </div>      
          </div>
         </div>
      </div>
    </div>
  )
}

export default NoteDetailpage
