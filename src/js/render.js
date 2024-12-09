/*
const notesList = document.getElementById("notes-list");
// Storage Key
const NOTES_KEY = "simplenote_notes";
let notes = JSON.parse(localStorage.getItem(NOTES_KEY)) || [];

function saveNotes() {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  }

// function to render and display notes to the page.
// accepts 1 parameter that defaults to "all" and if passed or no argument is provided all notes will be displayed
export function renderNotes(filter = "all") {
    // ensures we clear the contents of the previous note, if any
    notesList.innerHTML = "";
    // filtered notes variable for when notes are filtered. ternary operator checks the value of the parameter. if parameter is "all", all notes from the notes array are assigned to filtered notes variable
    const filteredNotes = filter === "all" ? notes : notes.filter(note => note.category === filter);

    // iterate through each note in the filtered array and for each note a callback function is executed with the current note passed as the "note" parameter
    filteredNotes.forEach(note => {
        // create a note card
        // div element
      const noteCard = document.createElement("div");
        // add a class
      noteCard.classList.add("note-card");
        // set the inner HTML
      noteCard.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.content.slice(0, 50)}...</p>
        <small>${note.category}</small>
        <button class="view-btn" data-id="${note.id}">View</button>
        <button class="delete-btn" data-id="${note.id}">Delete</button>
      `;
      // append the note to the note list
      notesList.appendChild(noteCard);
    });
}

// Delete Note
notesList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const noteId = parseInt(e.target.dataset.id, 10);
      if (confirm("Are you sure you want to delete this note?")) {
        notes = notes.filter(note => note.id !== noteId);
        saveNotes();
        renderNotes();
      }
    }
});
*/

export function renderNotes(notes, filter = "all", notesList) {
    notesList.innerHTML = "";
    const filteredNotes =
      filter === "all" ? notes : notes.filter(note => note.category === filter);
  
    filteredNotes.forEach(note => {
      const noteCard = document.createElement("div");
      noteCard.classList.add("note-card");
      noteCard.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.content.slice(0, 50)}...</p>
        <small>${note.category}</small>
        <button class="view-btn" data-id="${note.id}">View</button>
        <button class="delete-btn" data-id="${note.id}">Delete</button>
      `;
      notesList.appendChild(noteCard);
    });
  }
  