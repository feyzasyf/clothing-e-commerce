
import { useState } from "react";
import FormInput from "../form-input/form-input.components";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";
import {SignInFormWrapper} from './sign-in-form.styles.jsx';
import { useNavigate } from "react-router-dom";


const defaultFormFields= {      
    email: '',
    password: '',   
}
const SignInForm =()=>{
  const navigate= useNavigate();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;
    

     const resetFormFields=()=>{
        setFormFields(defaultFormFields);
     };

     const signInWithGoogle=async()=>{
       await signInWithGooglePopup();

       navigate("/");

    };
  


    const handleSubmit = async(e)=>{
        e.preventDefault();
    
         
        try {
          const {user}= await signInAuthUserWithEmailAndPassword(email,password);

         
            resetFormFields();
            navigate("/");
        } catch (error) {
            console.log(error.code)
            switch(error.code){
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email");
                    break;
                    default:
                        console.log(error);


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
<SignInFormWrapper>
<h6>Already have an account?</h6>
<span>Sign In with your email and password</span>
<form onSubmit={handleSubmit}>
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
               
<div className="buttons-container">
<Button type="submit">Sign In</Button>
<Button  buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={signInWithGoogle}>Google Sign In</Button>
</div>
</form>
</SignInFormWrapper>
)


}

export default SignInForm;