import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useParams } from 'react-router-dom';

const View = () => {
  const [note, setNote] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('id', id)
        .single(); 

      if (error) {
        console.error('Error fetching note:', error);
      } else {
        setNote(data);
        console.log('Fetched note:', data); 
      }
    };

    fetchNote();
  }, [id]); 

  return (
    <div className='mt-10'>
      {note ? (
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>{note.title}</h1>
          <p className='mt-4 text-lg'>{note.description}</p>
        </div>
      ) : (
        <div className='flex justify-center items-center h-screen'>
        <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default View;
