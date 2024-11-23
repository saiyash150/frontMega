import React from 'react';
import axios from 'axios';

const NoteList = ({ notes, fetchNotes }) => {
  const deleteNote = async (id) => {
    await axios.delete(`https://megadrive-1.onrender.com/${id}`);
    fetchNotes();
  };

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <p>Category: {note.category}</p>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
