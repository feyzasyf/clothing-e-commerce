
import { useState } from "react";
import FormInput from "../form-input/form-input.components";
import Button from "../button/button.component";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles.scss';
// import { UserContext } from "../../context/user.context";

const defaultFormFields= {      
    email: '',
    password: '',   
}
const SignInForm =()=>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;
    
  // const {setCurrentUser} = useContext(UserContext)
     const resetFormFields=()=>{
        setFormFields(defaultFormFields);
     };

     const signInWithGoogle=async()=>{
       await signInWithGooglePopup();
        // setCurrentUser(user);
        // await createUserDocumentFromAuth(user);

    };
  


    const handleSubmit = async(e)=>{
        e.preventDefault();
    
         
        try {
          const {user}= await signInAuthUserWithEmailAndPassword(email,password);
        //  setCurrentUser(user);
            resetFormFields();
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
<div className="sign-up-container">
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
<Button  type="button" buttonType="google"onClick={signInWithGoogle}>Google Sign In</Button>
</div>
</form>
</div>
)


}

export default SignInForm;