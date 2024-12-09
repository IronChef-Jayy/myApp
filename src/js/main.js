import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import { loadNotes, saveNotes } from "./storage.js";
import { renderNotes } from "./render.js";
import { openModal, closeModal, openViewModal, openEditModal } from "./modal.js";
import { handleFormSubmit } from "./form.js";
import { handleCategoryFilter } from "./filter.js";

// Selectors
const addNoteBtn = document.getElementById("add-note-btn");
const noteModal = document.getElementById("note-modal");
const closeNoteModal = document.getElementById("close-modal");
const noteForm = document.getElementById("note-form");
const notesList = document.getElementById("notes-list");
const categoryFilter = document.getElementById("category-filter");
const viewModal = document.getElementById("view-modal");
const closeViewModal = document.getElementById("back-btn");
const editNote = document.getElementById("edit-note-btn")
const viewTitle = document.getElementById("view-title");
const viewContent = document.getElementById("view-content");
const viewCategory = document.getElementById("view-category");


// State
let notes = loadNotes();
let editingId = null;

// Event Listeners
// open note modal
addNoteBtn.addEventListener("click", () => openModal(noteModal));
// close note modal
closeNoteModal.addEventListener("click", () => closeModal(noteModal));
// submitting a note
noteForm.addEventListener("submit", e =>
  handleFormSubmit(e, notes, saveNotes, renderNotes, noteModal, noteForm, notesList)
);

notesList.addEventListener("click", e => {
  if (e.target.classList.contains("view-btn")) {
    const noteId = parseInt(e.target.dataset.id, 10);
    const note = notes.find(note => note.id === noteId);
    if (note) {
      openViewModal(note, viewModal, viewTitle, viewContent, viewCategory);
    }
  }

  if (e.target.classList.contains("delete-btn")) {
    const noteId = parseInt(e.target.dataset.id, 10);
    if (confirm("Are you sure you want to delete this note?")) {
      notes = notes.filter(note => note.id !== noteId);
      saveNotes(notes);
      renderNotes(notes, "all", notesList);
    }
  }
});

editNote.addEventListener("click", (e) => {
  
  openEditModal();

  viewModal.classList.add("hidden");
  console.log('clicking on the edit button works but it\'s functionality isn\'t set yet');
})

closeViewModal.addEventListener("click", () => {
  viewModal.classList.add("hidden");
});


categoryFilter.addEventListener("change", e =>
  handleCategoryFilter(e, notes, renderNotes, notesList)
);

// Initialize App
renderNotes(notes, "all", notesList);


