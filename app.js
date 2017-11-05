console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const yargs = require("yargs");
const notes = require("./notes");

const argsv = yargs.argv;

const command = process.argv[2];
console.log("Command: ", command);
console.log(argsv);

if (command === "add") notes.addNote(argsv.title, argsv.body);
if (command === "list") notes.getAll();
