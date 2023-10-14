import React, { useState } from "react";
import "./AddNote.css";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const charLimit = 200;

  const handleChange = (event) => {
    if (charLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="addNote">
      <textarea
        cols="100"
        rows="8"
        className="noteCard"
        placeholder="Type something ..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="addFoot">
        <small className="wordCount">
          {charLimit - noteText.length} Remaining
        </small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
