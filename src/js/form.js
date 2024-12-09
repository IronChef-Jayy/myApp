import validator from "validator";

export function handleFormSubmit(e, notes, saveNotes, renderNotes, modal, form, notesList) {
  e.preventDefault();
  const title = document.getElementById("note-title").value.trim();
  const content = document.getElementById("note-content").value.trim();
  const category = document.getElementById("note-category").value;

  if (!validator.isEmpty(title) && !validator.isEmpty(content)) {
    const newNote = { id: Date.now(), title, content, category };
    notes.push(newNote);
    saveNotes(notes);
    renderNotes(notes, "all", notesList);
    modal.classList.add("hidden");
    form.reset();
  } else {
    alert("Title and content cannot be empty!");
  }


  


}
