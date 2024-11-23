import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';
import "./styles/styles.css"


const App = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');

  const fetchNotes = async () => {
    try {
      const { data } = await axios.get('https://megadrive-1.onrender.com/api/notes', {
        params: { search },
      });
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [search]);

  return (
    <div className="app-container">
      <h1>Notes App</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <NoteForm fetchNotes={fetchNotes} />
      <NoteList notes={notes} fetchNotes={fetchNotes} />
    </div>
  );
};

export default App;
