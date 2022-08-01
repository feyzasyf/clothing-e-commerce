import { initializeApp } from 'firebase/app';
import {getAuth,
     signInWithRedirect, 
     signInWithPopup, 
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
    } from 'firebase/auth';

    import {
        getFirestore,
        doc,
        getDoc,
        setDoc,

    } from 'firebase/firestore'


const firebaseConfig = {

    apiKey: "AIzaSyBo7ymQfPw8Zy-P7cTI2SlaJn2fPiFlZtM",
  
    authDomain: "fancy-clothing-db-8c8f8.firebaseapp.com",
  
    projectId: "fancy-clothing-db-8c8f8",
  
    storageBucket: "fancy-clothing-db-8c8f8.appspot.com",
  
    messagingSenderId: "967218515436",
  
    appId: "1:967218515436:web:1fc47dcebef427511d84c9"
  
  };
  
  
  // Initialize Firebase
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth= getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)
  export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth,provider)
  
  
  export const db= getFirestore();
  export const createUserDocumentFromAuth = async(userAuth, additionalInformation={}) =>{
        const userDocRef = doc(db, 'users', userAuth.uid );
        console.log(userDocRef);



        const userSnapshot= await getDoc(userDocRef);
        // console.log(userSnapshot.exists());
        //if user exists
        //return userDocRef
        //if user data does not exist -> create/setDoc with data from userauth in collection
        //set it with userSnapshot

        if(!userSnapshot.exists()){
          const {displayName, email} = userAuth;
          const createdAt = new Date();

         try {
         await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
         })
         } catch (error) {
            console.log("error creating the user", error.message)
         }
        }

        return userDocRef;

  }

  export const createAuthUserWithEmailAndPassword = async( email, password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email,password);
  };

  export const signInAuthUserWithEmailAndPassword =async(email, password)=>{
    if(!email || !password) return;
     return await signInWithEmailAndPassword(auth, email, password)
  }