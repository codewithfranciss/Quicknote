import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate()
  useEffect(() => {
    const fetchNote = async () => {
      const { data, error } = await supabase
        .from('notes')
        .select("*")
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching note:', error);
      } else {
        setNote(data);
        setTitle(data.title); 
        setDescription(data.description); 
        console.log('Fetched note:', data); 
      }
    };

    fetchNote();
  }, [id]); 

  const handleEdit = async (e) => {
    e.preventDefault(); 
    if(title=='' || description==''){
      alert('Please fill in all fields')
    }else{
    const { error } = await supabase
      .from('notes') 
      .update({
        title: title,
        description: description
      })
      .eq('id', id);

    if (error) {
      console.error('Error updating note:', error);
    } else {
      alert("Note Edited Successfully");
    }
    navigate('/')
  }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="w-full md:w-3/4 lg:w-1/2">
        <form onSubmit={handleEdit}>
          <input
            type="text"
            className="w-full dark:bg-base-100 p-4 mb-4 text-lg border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full dark:bg-base-100 h-64 p-4 text-lg border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            type="submit"
            className="btn dark:bg-base-100 ml-4 sm:w-44 mt-2 mb-6 border-gray-300 w-full btn-outline"
          >
            Edit Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
