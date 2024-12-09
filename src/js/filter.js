export function handleCategoryFilter(e, notes, renderNotes, notesList) {
    const filter = e.target.value;
    renderNotes(notes, filter, notesList);
  }
  