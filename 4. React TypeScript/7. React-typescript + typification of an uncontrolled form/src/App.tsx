// This line imports the LoginForm component from the file "../src/components/LoginForm".
// You use this component in your application.
import LoginForm from "../src/components/LoginForm";


// This line imports the LoginFormFields type from the "./types" file.
// It contains the data types used to describe the LoginForm input form.
import { LoginFormFields } from "./types";


// This line imports the CSS file "./styles.css". You use this file to style your application.
import "./styles.css";


// Ця рядок оголошує компонент App як функцію, яка буде викликатися для відображення вашого додатку.
export default function App() {

// This line declares the onSubmit variable as a function that receives a formFields argument of type LoginFormFields.
// This function will be called after the form is submitted in the LoginForm component, and it simply outputs the form data to the console.
   const onSubmit = (formFields: LoginFormFields) => {
      console.log(formFields);
   };

   return (
      <div className="App">
         <h1>Hello TS React</h1>

{/* This line inserts the 'LoginForm' component into your page.
   You pass the 'onSubmit' function to it as a prop so that it can call it when the form is submitted. */}
         <LoginForm onSubmit={onSubmit} />
      </div>
   );
}
