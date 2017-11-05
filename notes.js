console.log("Starting notes...");
const fs = require("fs");

const addNote = (title, body) => {
  let notes = [];
  const note = {
    title,
    body
  };

  try {
    const notesString = JSON.parse(fs.readFileSync("notes-data.json"));
    notes = notesString;
  } catch (e) {}

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
  } else {
    console.log("Hey, you need a new title!");
  }
};

const getAll = () => {
  console.log("Getting all notes.");
};

const readNote = title => {
  console.log("Reading note " + title);
};

const removeNote = title => {
  console.log("Removing " + title);
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
