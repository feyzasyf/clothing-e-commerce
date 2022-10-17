import { initializeApp } from 'firebase/app';
import {getAuth,
     signInWithRedirect, 
     signInWithPopup, 
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged,
     
    } from 'firebase/auth';

    import {
        getFirestore,
        doc,
        getDoc,
        setDoc,
        collection,
        writeBatch,
        query,
        getDocs,

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

  // upload data to respective collection up in firestore

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd)=>{
    const collectionRef = collection(db, collectionKey);
    // upload ina  batch to uplaod all data in one successful "transaction"
    const batch = writeBatch(db)
  // // batch instance
  // create and set onject şnto collection as a document

  objectsToAdd.forEach((object)=>{
    const docRef= doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments=async()=>{
  const collectionRef = collection(db, 'categories');

  // generate a query off of collectionRef, I can get an object
  //  that I can get a snapshot from
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((docSnapshot)=>docSnapshot.data());
  // now we can access different document snapshots
  // const categoryMap =querySnapshot.docs.reduce((acc, docSnapshot)=>{
  //     const { title, items } = docSnapshot.data();
  //     acc[title.toLowerCase()]= items;
  //     return acc;
  // }, {});
  // return categoryMap;
}




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

  export const signOutUser = async()=> await signOut(auth);

  export const onAuthStateChangedListener =(callback)=> onAuthStateChanged(auth,callback);
  


