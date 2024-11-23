import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ fetchNotes }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Others');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://megadrive-1.onrender.com/api/notes', {
      title,
      description,
      category,
    });
    setTitle('');
    setDescription('');
    setCategory('Others');
    fetchNotes();
  };

  return (
    <form onSubmit={handleSubmit} className="formbox">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
