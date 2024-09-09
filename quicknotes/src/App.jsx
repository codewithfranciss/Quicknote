import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'

import Edit from './components/editNotes'
import Notes from './components/Notes'
import View from './components/viewNotes'


function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Notes />} />
      
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view/:id" element={<View />} />
          </Routes>
       
      </Router>
     
    </>
  )
}

export default App
