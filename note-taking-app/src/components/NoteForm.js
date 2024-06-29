import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notesSlice";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content) {
      dispatch(addNote({ title, content }));
      setTitle("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button type="submit">Add Note</button>
      </div>
    </form>
  );
};

export default NoteForm;
