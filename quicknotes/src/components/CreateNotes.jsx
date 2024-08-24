import React from 'react';
import { useState } from 'react';
import {supabase} from '../../lib/supabaseClient'
const NotesForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!title=='' || description==''){
      alert('Please fill in all fields')
    }else{
    const {error} = await supabase
    .from('notes')
    .insert({
      title: title,
      description: description
    })


    if(!error){
      alert("Notes Created Successfully")
      setDescription('')
      setTitle('')
    }else
    console.log(error)

  }}
    return (
   
        <div className="flex justify-center mt-10">
          
            <div className="w-full md:w-3/4 lg:w-1/2">
            <form action="" onSubmit={handleSubmit}>
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
                 <button className="btn dark:bg-base-100 mt-2 mb-6 border-gray-300   btn-outline w-full">Create Note</button>
                 </form>
            </div>
           
        </div>
       
    );
};

export default NotesForm;
