import React, { useState, BaseSyntheticEvent } from "react";
import { INote } from "../model";

interface AddNoteProps {
  addNote: (text:string) => void;
}

const AddNote = ({ addNote }: AddNoteProps) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200

  const handleNoteChange = (e: BaseSyntheticEvent) => {
    console.log(e)
    if(characterLimit - e.target.value.length > 0) {
    setNoteText(e.target.value)
    }
  }

  const handleSaveNote = (textInput: string) => {
    if (textInput.trim().length > 0) { //)) REVIEW THIS
      addNote(textInput);
      setNoteText("")
    }
  };

  return (
    <div className="note new">
      <textarea
        onChange={handleNoteChange}
        value={noteText}
        placeholder="add a note"
        cols={10}
        rows={8}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button onClick={() => handleSaveNote(noteText)} className="save">
          save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
