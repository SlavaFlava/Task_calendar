import React from 'react'
import { useParams } from 'react-router-dom';



const NoteDetails = () => {
    const { noteCategory, noteDetails } = useParams()
    
    return(
     <h1>NoteDetails</h1>
    )
}

export default NoteDetails