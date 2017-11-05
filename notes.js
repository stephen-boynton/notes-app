console.log("Starting notes...");

const addNote = (title, body) => {
  console.log(title, body);
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
