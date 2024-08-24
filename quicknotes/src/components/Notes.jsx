import React, { useEffect, useState } from 'react';
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { supabase } from '../../lib/supabaseClient';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const { data, error } = await supabase
        .from('notes')
        .select('*');

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setNotes(data);
      }
    };

    getNotes();
  }, []);

  const deleteNote = async (id) => {
    const { error } = await supabase
      .from('notes')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting note:', error);
    } else {
      // Update the state to remove the deleted note
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  return (
    <div className='mt-10'>
      <div className='flex flex-wrap mx-10 gap-12'>
        {notes.map((note) => (
          <div className="card bg-base-100 w-96 shadow-xl" key={note.id}>
            <div className="card-body">
              <h2 className="text-center font-bold text-2xl mb-16">{note.title}</h2>

              <div className="card-actions justify-between">
                <button><FaEye className='text-2xl hover:text-slate-500 text-slate-300' /></button>
                <div>
                  <button><FaEdit className='text-2xl hover:text-slate-500 mr-4 text-slate-300' /></button>
                  <button onClick={() => deleteNote(note.id)}><FaTrash className='text-xl hover:text-slate-500 text-slate-300' /></button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
