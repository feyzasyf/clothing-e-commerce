import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {AuthenticationWrapper} from './authentication.styles.jsx'

const Authentication = () => {
  //Google redirect-check if there is data
  //when redirected back to our page from google page
  // useEffect(()=>{
  //     async function fetchData(){
  //         const response=await getRedirectResult(auth);
  //        if(response){
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //        }
  //     };
  //     fetchData();
  // },[])

  return (
    <AuthenticationWrapper>
    

      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
      <SignInForm />
      <SignUpForm />
    </AuthenticationWrapper>
  );
};

export default Authentication;
