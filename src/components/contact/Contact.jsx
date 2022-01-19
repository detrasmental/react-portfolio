import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss"

export default function Contact() {

    const [message,setMessage] = useState(false);
    const formRef = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs
      .sendForm(
        "service_kzksq6d",
        "template_lb2zsid",
        formRef.current,
        "user_5a8PtdxU6y9fMCGoB5SXS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
        setMessage(true)
    }
    return (
        <div className='contact' id="contact">
            <div className="left">
                <img src="assets/contact.png" alt=""/>
            </div>
         <div className="right">
             <h2>contact me.</h2>
             <form ref={formRef} onSubmit={handleSubmit}>
                 <input type="text" placeholder="Name" name="user_name"/>
                 <input type="text" placeholder="Email" name="user_email"/>
                 <input type="text" placeholder="Subject" name="user_subject"/>
                 <textarea placeholder="Message" name="message" ></textarea>
                 <button type="submit">Send</button>
                 {message && <span>Thanks for reaching out! I'll get back with you as soon as I can.</span>}
             </form>
             </div>   
            
        </div>
    )
}
