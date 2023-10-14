import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import Body from './components/Body/Body'
import './App.css'
import Search from './components/Search/Search'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [card, setCard]=useState([
    {
     id:nanoid(),
     text:"This is a Sample Text",
     date:"01/01/1970",
    }
])

const [searchText, setSearchText]=useState('')

const addNote=(text)=>{
const date=new Date()
const newNote={
  id:nanoid(),
  text:text,
  date:date.toLocaleDateString()
}
const newNotes=[...card, newNote]
setCard(newNotes)
}

const deleteNote=(id)=>{
const newNotes=card.filter((car)=>car.id !=id)
setCard(newNotes)
}

  return (
    <div className="structure">
      <Navbar />
      <Search handleSearchNote={setSearchText}/>
      <Body cards={card.filter((n)=>n.text.toLowerCase().includes(searchText))} handleAddNote={addNote} 
      handleDeleteNote={deleteNote}
      />
    </div>
  )
}

export default App
