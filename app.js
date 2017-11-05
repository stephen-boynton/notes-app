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
  if (note) {
    console.log("Saved note");
  } else {
    console.log("Failed to save note");
  }
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") {
  notes.readNote(argv.title);
} else if (command === "remove") {
  const noteRemoved = notes.removeNote(argv.title);
  const message = noteRemoved
    ? "Note was removed."
    : "No note found with that title.";
  console.log(message);
} else {
  console.log("Command not recognized");
}
