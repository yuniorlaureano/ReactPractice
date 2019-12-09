export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const SHOW_ALL = 'SHOW_ALL';

export const addNote = (title, content) => ({ type: ADD_NOTE, title: title, content: content });

export const removeNote = id =>  ({type: REMOVE_NOTE, id: id});

export const showAll = () => ({type: SHOW_ALL});