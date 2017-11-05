console.log("Starting notes...");
const fs = require("fs");

const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes-data.json"));
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title,
    body
  };

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
  } else {
    console.log("Hey, you need a new title!");
  }
};

const getAll = () => {
  return fetchNotes();
};

const readNote = title => {
  const notes = fetchNotes();
  const note = notes.filter(note => note.title === title);
  return note;
};

const removeNote = title => {
  const notes = fetchNotes();
  const corrected = notes.filter(note => note.title !== title);
  saveNotes(corrected);
  return notes.length !== corrected.length;
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
