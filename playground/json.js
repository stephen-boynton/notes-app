// const obj = {
//   name: "Stephen"
// };

// const stringObj = JSON.stringify(obj);

// console.log(stringObj);

// const psersonString = '{"name": "Stephen","age": 33}';
// const person = JSON.parse(psersonString);
// console.log(person);

const fs = require("fs");

let originalNote = {
  title: "Title of Note",
  body: "Here is the body of the note."
};
const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", originalNoteString);

const noteString = JSON.parse(fs.readFileSync("notes.json"));
console.log(noteString);
