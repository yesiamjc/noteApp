import React from 'react'
import "./Body.css"
import Card from '../Card/Card'
import AddNote from '../AddNote/AddNote'

const Body = ({cards, handleAddNote, handleDeleteNote}) => {
  return (
    <div className="body">
        {cards.map((anycard)=> (
        <Card id={anycard.id} text={anycard.text} date={anycard.date}
        handleDeleteNote={handleDeleteNote}
        />
        ))}
        <AddNote handleAddNote={handleAddNote}/>
    </div>
  )
}

export default Body
