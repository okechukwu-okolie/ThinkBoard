import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router'
import axiosInstance from './libs/axios'
import toast from 'react-hot-toast'


const NoteCard = ({note, setNotes}) => {

    const navigate = useNavigate()

    const deleteNote =async (e,id)=>{
        e.preventDefault()
        e.stopPropagation();
        // if(!window.confirm('Are you sure you want to delete this note?'))return 
        // 
        //this line of code is for confirmation before deleting a note, but it can be annoying for users, so I have commented it out. You can uncomment it if you want to use it.
        try {
            
            await axiosInstance.delete(`/notes/${id}`)
            setNotes((prevNotes) => prevNotes.filter((n) => n._id !== id))// Optimistically update the UI by removing the deleted note from the state
            toast.success('Note deleted successfully')
        } catch (error) {
            console.error('Error deleting note:', error)
            toast.error('Error deleting note')
        }
    }

    const editNote = async(e,id)=>{
        e.preventDefault()
        e.stopPropagation();
       

        // For example, if you are using React Router v6:
        navigate(`/www.google.com`)
        try {
            await axiosInstance.put(`/notes/${id}`,{
                title: note.title,
                content: note.content
            })
            toast.success('Note updated successfully')
        } catch (error) {
            console.error('Error updating note:', error)
            toast.error('Error updating note')
        }
        }
    
  return (
    <Link to={`/notes/${note._id}`}
    className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-4 border-opacity-[0.1] border-[#00FF9D'>

        <div className='card-body '>
            <h3 className='card-title text-base-content'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
            <div className='card-actions justify-between items-center mt-4'>
                <span className='text-sm text-base-content/60'>
                {new Date(note.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                })}
                </span>
                <div className='flex items-center gap-1'>
                    <PenSquareIcon className='size-4'/>
                    <button className='btn btn-ghost btn-xs text-error' onClick={(e)=>deleteNote(e,note._id)}>
                        <Trash2Icon className='size-4' onClick={(e)=>editNote(e,note._id)}/>
                    </button>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default NoteCard