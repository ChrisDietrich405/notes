import React from 'react'
import Note from './Note'
import { INote } from "../model"
import AddNote from './AddNote'

interface NotesListProps {
    notes: INote[];
    addNote: (text: string) => void
    handleDeleteNote: (id: string) => void
   
}

const NotesList = ({notes, addNote, handleDeleteNote} : NotesListProps) => {
  return (
    <div className="notes-list">
        {notes.map((note) => {
            return (
                <Note id={note.id} text={note.text} date={note.date}
                handleDeleteNote={handleDeleteNote}
                />
            )
        })}
    <AddNote addNote={addNote} />
    </div>
  )
}

export default NotesList