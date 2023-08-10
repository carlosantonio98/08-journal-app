import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote } from './';
import { loadNotes } from '../../helpers';

// La nomenclatura del start es para indicar que comienza el proceso
export const startNewNote = () => {
    return async( dispatch, getState ) => {

        dispatch( savingNewNote() );

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );
        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );

    }
}

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );

    }
}

export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;  // Eliminar la propiedad del objeto

        // Creamos el documento referenciado
        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
        
        // Actualizamos el documento
        await setDoc( docRef, noteToFirestore, { merge: true } );  // Si el documento no existe, entonces se crea. Colocamos el merge para que se unan estos datos con los que estan en la bd

        dispatch( updateNote( note ) );

    }
}