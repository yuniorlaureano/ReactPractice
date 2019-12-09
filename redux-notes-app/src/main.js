import store from "./store/store";
import {addNote, removeNote} from "./actions/actions";

let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];

// ------ Redux ------
function deleteNote(index) {
    store.dispatch(removeNote(index));
}

function renderNotes(){

    let notes = store.getState().notes;

    notesUList.innerHTML = '';
    let noteItem = [];
    notes.map((note, index) => {
        noteItem.push(`
        <li>
            <b>${ note.title }</b>
            <button data-id="${ index }">x</button>
            <hr/>
            <br />
            <span>${ note.content }</span>
        </li>
        `);
    });

    notesUList.innerHTML = noteItem.join("");

    setDeleteNoteButtonsEventListeners();
}

const unsubscribe = store.subscribe(() => {
    renderNotes();
});

store.subscribe( () =>{
    renderNotes();
});

addNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let title =  addNoteTitle.value;
    let content = addNoteContent.value;
    store.dispatch(addNote(title, content));
});

function setDeleteNoteButtonsEventListeners() {
    let buttons = document.querySelectorAll('ul#notes li button');
    for(let button of buttons){
        button.addEventListener('click', () => deleteNote(button.dataset.id));
    }
}

renderNotes();