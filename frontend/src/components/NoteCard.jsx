import { PenSquareIcon, Trash2Icon } from 'lucide-react';
import React from 'react';
import { Link, useNavigate } from 'react-router'; // or 'react-router-dom'
import axiosInstance from './libs/axios.js';
import toast from 'react-hot-toast';
import NoteDetailpage from '../pages/NoteDetailPage.jsx';

const NoteCard = ({ note, setNotes }) => {
    const navigate = useNavigate();

    const deleteNote = async (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            await axiosInstance.delete(`/notes/${id}`);
            setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
            toast.success('Note deleted successfully');
        } catch (error) {
            toast.error('Error deleting note');
            console.log(error)
        }
    };

    const handleEditClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
       
       navigate(`/notes/${note._id}`);
    };

    return (
        <Link to={`/notes/${note._id}`} className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-4 border-opacity-[0.1] border-[#00FF9D]'>
            <div className='card-body'>
                <h3 className='card-title text-base-content'>{note.title}</h3>
                <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
                <div className='card-actions justify-between items-center mt-4'>
                    <span className='text-sm text-base-content/60'>
                        {new Date(note.createdAt).toDateString()}
                        <p></p>
                        {new Date(note.createdAt).toLocaleTimeString()}
                    </span>
                    <div className='flex items-center gap-2'>
                        {/* Edit Button */}
                        <button className='btn btn-ghost btn-xs' onClick={handleEditClick}>
                            <PenSquareIcon className='size-4 text-primary' />
                      
                        </button>
                        {/* Delete Button */}
                        <button className='btn btn-ghost btn-xs text-error' onClick={(e) => deleteNote(e, note._id)}>
                            <Trash2Icon className='size-4' />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NoteCard;