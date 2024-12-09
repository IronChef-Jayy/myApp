/* import validator from "validator";

const addNoteButton = document.getElementById('add-note-btn');
const closeNoteModal = document.getElementById('close-modal');
const noteForm = document.getElementById('note-form');
const noteModal = document.getElementById('note-modal');
const notes = [];

export function noteModalPopUp() {
    // will listen for add note button click and display note modal as it's hidden using css display property
    addNoteButton.addEventListener('click', () => {
        noteModal.classList.remove('hidden');
    });
    
    // will close the modal without saving
    closeNoteModal.addEventListener('click', () => {
        noteModal.classList.add('hidden');
    })

    // listen for submit and prevent default process
    noteForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // title variable note title input
        const title = document.getElementById('note-title').value.trim();
        // content variable for note content input
        const content = document.getElementById('note-content').value.trim();
        // category variable for note category drop down option
        const category = document.getElementById('note-category').value;

        // check if title AND content are NOT empty, and if so
        if (!validator.isEmpty(title) && !validator.isEmpty(content)) {
            // create a new note as an object with an unique identifier for database purposes and the values from title, content, and category
            const newNote = { id: Date.now(), title, content, category };
            // add the Note to our array we initialized to hold the notes
            notes.push(newNote);
            // log that this task has been successful
            console.log(`This note ${newNote.title} was processed and now can be saved!`);
            // log the details of the note
            console.log(newNote);
         
        } else { // if not
            // send alert message
            alert("You must fill in a Title and Content in order to save a note!");
        }
    });
} */

export function openModal(modal) {
    modal.classList.remove("hidden");
}
      
export function closeModal(modal) {
    modal.classList.add("hidden");
}

export function openViewModal(note, modal, modalTitle, modalContent, modalCategory) {
    modalTitle.textContent = note.title;
    modalContent.textContent = note.content;
    modalCategory.textContent = `Category: ${note.category}`;
    modal.classList.remove("hidden");
}


export function openEditModal(note) {
    const noteModal = document.getElementById("note-modal");
    const modalTitle = document.getElementById("modal-title");
  
    if (note) {
      // Pre-fill form fields with note data
      document.getElementById("note-title").value = note.title;
      document.getElementById("note-content").value = note.content;
      document.getElementById("note-category").value = note.category;
      modalTitle.textContent = "Edit Note";
    } else {
      // Reset form fields for adding a new note
      document.getElementById("note-form").reset();
      modalTitle.textContent = "Add Note";
    }
  
    // Show the modal
    noteModal.classList.remove("hidden");
}

  
  