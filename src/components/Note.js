import React from 'react'
import { MdDeleteForever } from "react-icons/md";

export default function Note({id, text, date, handleDeleteNote}) {
  return (
    <div className='note'>
        <span>{text}</span>

        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-note' size='1.5em'/>
        </div>
        </div>
  )
}
