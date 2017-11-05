console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const yargs = require("yargs");
const notes = require("./notes");

const argv = yargs.argv;

const command = process.argv[2];
console.log("Command: ", command);
console.log(argv);

if (command === "add") {
  const note = notes.addNote(argv.title, argv.body);
  note ? console.log("Saved note") : console.log("Failed to save note");
} else if (command === "list") {
  const list = notes.getAll();
  if (list) {
    list.forEach(note => console.log(note));
  } else {
    console.log("You have no notes.");
  }
} else if (command === "read") {
  const note = notes.readNote(argv.title);
  note ? console.log(note) : console.log("Note not found.");
} else if (command === "remove") {
  const noteRemoved = notes.removeNote(argv.title);
  const message = noteRemoved
    ? "Note was removed."
    : "No note found with that title.";
  console.log(message);
} else {
  console.log("Command not recognized");
}
