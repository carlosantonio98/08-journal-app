import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';


export const loadNotes = async( uid = '' ) => {
    if ( !uid ) throw new Error('El UID del usuario no existe');

    const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` );
    const docs = await getDocs( collectionRef );  // Hacemos referencia a los docs de firebase con los datos en crudo, los datos de cada doc esta en su metodo data del prototype

    const notes = [];
    docs.forEach( doc => {
        notes.push({ id: doc.id, ...doc.data() });  // Transformamos los datos en json
    });

    return notes;

}