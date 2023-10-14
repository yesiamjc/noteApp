import React from 'react'
import "./Card.css"
import {MdDeleteForever} from 'react-icons/md'

const Card = ({id, text, date, handleDeleteNote}) => {
  return (
    <div className="oneCard">
      <span className="cardContent">{text}</span>
      <div className="cardBottom">
        <small className="cardDate">{date}</small>
        <MdDeleteForever className="deleteIcon" onClick={()=>handleDeleteNote(id)}/>
      </div>
    </div>
  )
}

export default Card
