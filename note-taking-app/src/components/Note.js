import React from "react";
import { useDispatch } from "react-redux";
import { pinNote, deleteNote } from "../redux/notesSlice";
import { AiFillDelete, AiFillPushpin, AiOutlinePushpin } from "react-icons/ai";

const Note = ({ note }) => {
  const dispatch = useDispatch();

  const splitContentIntoParagraphs = (content, charsPerLine = 40) => {
    const paragraphs = [];
    let currentLine = "";

    for (let i = 0; i < content.length; i++) {
      currentLine += content[i];

      if (currentLine.length >= charsPerLine || i === content.length - 1) {
        paragraphs.push(currentLine.trim());
        currentLine = "";
      }
    }

    return paragraphs;
  };

  const renderContent = (content) => {
    const paragraphs = splitContentIntoParagraphs(content);
    return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  return (
    <div className={`note ${note.pinned ? "pinned" : ""}`}>
      <h4>{note.title}</h4>
      {renderContent(note.content)}
      <button onClick={() => dispatch(pinNote(note.id))}>
        {note.pinned ? <AiOutlinePushpin /> : <AiFillPushpin />}
      </button>
      <button
        className="delete-button"
        onClick={() => dispatch(deleteNote(note.id))}
      >
        <AiFillDelete />
      </button>
    </div>
  );
};

export default Note;
