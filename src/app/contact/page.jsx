"use client"
import { useRouter } from "next/navigation";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Nav from "@/components/nav/Nav";
import 'tailwindcss/tailwind.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xpzvzajl");
  const router = useRouter();// Obtiene la función de navegación
  const [toastShown, setToastShown] = React.useState(false);

  if (state.succeeded && !toastShown) {
    toast.success(`Thank you!`, {
      className: "toastSuccess",
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
      hideProgressBar: false,
    });
    setToastShown(true);
      router.replace("/"); 
      //return <p>Thanks for joining!</p>;
      
  }
  return (
 <>
 <Nav/>
    <div className="flex items-center justify-center h-screen ">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <label htmlFor="name" className="block text-sm font-medium text-pink-600">
        Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
        placeholder='Your name'
        className='mt-1 p-2 border rounded-md w-full text-gray-700 mb-[15px]'
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email" className="block text-sm font-medium text-pink-600">
        Email
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Your email address'
        className='mt-1 p-2 border rounded-md w-full text-gray-700 mb-[15px]'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="subjact" className="block text-sm font-medium text-pink-600">
        Subject
      </label>
      <input
        id="subject"
        type="text" 
        name="subject"
        placeholder='Contact reason'
        className='mt-1 p-2 border rounded-md w-full text-gray-700 mb-[15px]'
      />
      <ValidationError 
        prefix="subject" 
        field="subject"
        errors={state.errors}
      />
       <label htmlFor="message" className="block text-sm font-medium text-pink-600">
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        className='mt-1 p-2 border rounded-md w-full text-gray-700 mb-[15px]'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button
  type="submit"
  disabled={state.submitting}
  className={`mt-4 p-2 rounded-md w-full ${
    state.submitting ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-pink-500 text-white'
  }`}
>
  {state.submitting ? 'Submitting...' : 'Submit'}
</button>
    </form>
    
    </div>
    </>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;

// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// import { useRouter } from "next/navigation";

// function ContactForm() {
//   const [state, handleSubmit] = useForm("xpzvzajl");
//   const router = useRouter();// Obtiene la función de navegación

//   const handleSubmission = async (values) => {
//     // Puedes realizar acciones adicionales antes de enviar el formulario, si es necesario.
//     console.log("Form values:", values);

//     // Enviar el formulario utilizando el hook handleSubmit
//     const result = await handleSubmit(values);

//     // Después de enviar el formulario, redirigir a "/"
//     if (result.success) {
//       router.replace("/education"); 
//     }
//   };

//   if (state.succeeded) {
//     return <p>Thank you!</p>;
//   }

//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault(); // Evitar el envío automático del formulario
//       handleSubmission({
//         name: e.target.name.value,
//         email: e.target.email.value,
//         subject: e.target.subject.value,
//         message: e.target.message.value,
//       });
//     }}>
//       <label htmlFor="name">Name</label>
//       <input
//         id="name"
//         type="name"
//         name="name"
//         placeholder="Your name"
//         className="text-black"
//         required
//       />
//       <ValidationError prefix="Name" field="name" errors={state.errors} />

//       <label htmlFor="email">Email</label>
//       <input
//         id="email"
//         type="email"
//         name="email"
//         placeholder="Your email address"
//         className="text-black"
//         required
//       />
//       <ValidationError prefix="Email" field="email" errors={state.errors} />

//       <label htmlFor="subject">Subject</label>
//       <input
//         id="subject"
//         type="text"
//         name="subject"
//         placeholder="Contact reason"
//         className="text-black"
//         required
//       />
//       <ValidationError prefix="Subject" field="subject" errors={state.errors} />

//       <label htmlFor="message">Message:</label>
//       <textarea
//         id="message"
//         name="message"
//         className="text-black"
//         required
//       />
//       <ValidationError prefix="Message" field="message" errors={state.errors} />

//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }

// function App() {
//   return <ContactForm />;
// }

// export default App;