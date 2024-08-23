import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import Create from './components/createNotes'
import Edit from './components/editNotes'
import Notes from './components/Notes'


function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          </Routes>
       
      </Router>
     
    </>
  )
}

export default App
