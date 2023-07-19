import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {

    try {

        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }

    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;
        
        return {
            ok: false,
            errorMessage
        }

    }

}

export const registerUserWithEmailPassword = async({ email, password, displayName }) => {
    try {

        console.log({ email, password, displayName});
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );  // Aparte de crear el registro del usuario automaticamente este inicia sesión en nuestra app
        const { uid, photoURL } = resp.user;
        
        await updateProfile(  // Actualiza los datos del perfil del usuario
            FirebaseAuth.currentUser, // Obtiene el usuario que esta autenticado actualmente
            { displayName }  // actualizamos lo que queremos
        );

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        // console.log(error);
        return { ok: false, errorMessage: error.message }
    }
}