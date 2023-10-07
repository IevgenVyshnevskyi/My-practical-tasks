// This line imports the React library.
import * as React from "react";

// This line imports the LoginFormFields type from the "../types" file.
// This type is used to describe form data.
import { LoginFormFields } from "../types";


//  This line declares the LoginFormProps interface, which defines the props that the LoginForm component can accept.
// In this case, it has a single onSubmit prop, which is a function that accepts a LoginFormFields object.
interface LoginFormProps {
   onSubmit: (data: LoginFormFields) => void;
}


// This line defines the FormFields type, which contains references to the HTML elements of the form.
// In this case, this is a link to the email, password, and remember elements.
type FormFields = {
   email: HTMLInputElement;
   password: HTMLInputElement;
   remember: HTMLInputElement;
};


// This line declares the LoginForm functional component.
// It accepts props with the structure defined in the LoginFormProps interface.
// The component accepts one 'onSubmit' prop, which will be called when the form is submitted.
export default function LoginForm({ onSubmit }: LoginFormProps) {


// This line declares the handleSumbit function that will be called when the form is submitted.
// It receives an event object of type React.FormEvent, which represents the form submission event.
// The event object type combines HTMLFormElement and FormFields to access form elements.
   const handleSumbit: React.FormEventHandler<HTMLFormElement & FormFields> = (
      event
   ) => {

// This line calls the 'preventDefault()' method to prevent the default page reload after the form is submitted.
      event.preventDefault();

// This line gets a reference to the current form from the event.currentTarget event object.
      const form = event.currentTarget;

// This line deconstructs references to form elements that have name attributes "email", "password", and "remember".
      const { email, password, remember } = form;

// This line calls the onSubmit function that was passed to the component via props. As an argument, it passes an object with the values ​​email, password, and remember.
   onSubmit({
      email: email.value,
      password: password.value,
      remember: remember.checked
      });
   };

   return (
// The code in the LoginForm component displays a form with input fields for email and password,
// as well as a "Remember me" checkbox. When the form is submitted, the handleSumbit function is called,
// which passes the form data through the onSubmit function.
      <form onSubmit={handleSumbit}>
         <label>
            <span>Email</span>
            <input name="email" type="email" required />
         </label>
         <label>
            <span>Password</span>
            <input name="password" type="password" required />
         </label>
         <label>
            <input name="remember" type="checkbox" />
            <span>Remember me</span>
         </label>
      <button type="submit">Login</button>
      </form>
   );
}
