
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.components";
import {SignUpFormWrapper} from "./sign-up-form.styles.jsx";
// import { UserContext } from "../../context/user.context";

const defaultFormFields= {   
    displayName: '',
    email: '',
    password: '',
    confirmPassword:'',
}

const SignUpForm =()=>{

const [formFields, setFormFields] = useState(defaultFormFields);
const {displayName,email,password,confirmPassword} = formFields;
// const {setCurrentUser} = useContext(UserContext)



 const resetFormFields=()=>{
    setFormFields(defaultFormFields);
 }
const handleSubmit = async(e)=>{
    e.preventDefault();

    if(password !== confirmPassword){
        alert("passwords do not match");
        return;
    }

    try {
        const {user}= await createAuthUserWithEmailAndPassword(email, password);
        // setCurrentUser(user);
        await createUserDocumentFromAuth(user, {displayName})
      
        resetFormFields();

    } catch (error) {
        if(error.code === 'auth/email-already-in-use'){
            alert("cannot create user, email already in use")
        }
        else{
        console.log("encountered an error", error);
        }
    }


}
const handleChange =(e)=>{
  const {name, value} = e.target;
  setFormFields({
    ...formFields,
    [name]: value
  })
}

    return (
        <SignUpFormWrapper>
        <h2>Don't have an account?</h2>
            <span>SignUp with your email and password</span>
            <form onSubmit={handleSubmit}>
            
    
            <FormInput label="Display Name" 
            inputOptions={{
            type:"text",
             onChange:handleChange, 
             required:true,
             value:displayName,
              name:"displayName",
            }}/>

      
<FormInput label="Email" 
            inputOptions={{
            type:"email",
             onChange:handleChange, 
             required:true,
             value:email,
              name:"email",
            }}/>

      
<FormInput label="Password" 
            inputOptions={{
            type:"password",
             onChange:handleChange, 
             required:true,
             value:password,
              name:"password",
            }}/>
               
<FormInput label="Confirm Password" 
            inputOptions={{
            type:"password",
             onChange:handleChange, 
             required:true,
             value:confirmPassword,
              name:"confirmPassword",
            }}/>
            
            <Button  type="submit">Sign Up</Button>
            </form>
        </SignUpFormWrapper>
    )
}

export default SignUpForm;