const fs = require("fs");

const uploadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notepad.json");
    const dataJson = dataBuffer.toString();

    return JSON.parse(dataJson);
  } catch (error) {
    return [];
  }
};

const newNote = function (title, body) {
  const notes = uploadNotes();
  notes.push({ title, body });

  fs.writeFileSync("notepad.json", JSON.stringify(notes));
};

const deleteNote = function (title) {
  const notes = uploadNotes();
  const remaining = notes.filter((note) => note.title != title);
  fs.writeFileSync("notepad.json", JSON.stringify(remaining));
};

const allNotes = function () {
  const notes = uploadNotes();
  notes.forEach((note) => console.log(note.title));
};

const findNote = function (title) {
  const notes = uploadNotes();
  const note = notes.find((note) => note.title);
  if (note) {
    console.log(note.title, " -> ", note.body);
  } else {
    console.log("No note found");
  }
};
module.exports = { newNote, deleteNote, allNotes, findNote };
