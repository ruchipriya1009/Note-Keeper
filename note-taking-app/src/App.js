import React from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Note Taking App</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default App;
