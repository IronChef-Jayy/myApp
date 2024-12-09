const NOTES_KEY = "simplenote_notes";
export let notes = JSON.parse(localStorage.getItem(NOTES_KEY)) || [];

export function loadNotes() {
  return JSON.parse(localStorage.getItem(NOTES_KEY)) || [];
}

export function saveNotes(notes) {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

export function updateNote(noteId, updatedNote) {
  const noteIndex = notes.findIndex(note => noteId === noteId);

  if (noteIndex > -1) {
    notes[noteIndex] = {...notes[noteIndex], ...updatedNote};
    saveNotes();
  }
}
