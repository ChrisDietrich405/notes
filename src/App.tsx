// 30

import React, { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

import { INote } from "./model";

const App = () => {
  const [notes, setNotes] = useState<INote[]>([
    {
      text: "this is the first note",
      date: "4/33/33",
      id: nanoid(), //WHAT'S THIS, A LIBRARY?
    },
    {
      text: "this is the second note",
      date: "4/33/33",
      id: nanoid(),
    },
    {
      text: "this is the third note",
      date: "4/33/33",
      id: nanoid(),
    },
    {
      text: "this is the fourth note",
      date: "4/33/33",
      id: nanoid(),
    },
  ]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  },[notes])

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes") || "")

    if(savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text: string) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const handleDeleteNote = (id: string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={ `${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <Header setDarkMode={setDarkMode} />
        <Search setSearchText={setSearchText} />

        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          //DON'T UNDERSTAND
          addNote={addNote}
          handleDeleteNote={handleDeleteNote}
        />
      </div>
    </div>
  );
};

export default App;
