import React, {  useRef, useState } from "react";
import './Contact.css'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bsjwe5y', 'template_wz0zvua', form.current, 'egJ27kaDiQZ80XgWw')
      .then((result) => {
        console.log(result.text);
        setDone(true);
        form.reset();
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='Contact'id="Contact" >
      <div className="cleft">
        <div className="cspan">
          <span>Contact Me</span>
          <div className='blur s-blur' style={{ background: '#ABF1FF94' }}>
          </div>
        </div>
      </div>
      <div className="cright">
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='user_name' className='user' placeholder='Name' required />
          <input type='email' name='user_email' className='user' placeholder='Email' required />
          <textarea name="message" placeholder='Message' className='user' required />
          <input type='submit' value='Send' className='button' />
          <span>{done && "Thanks for Contacting Me"}</span>
          <div className="blur c-blur" style={{ background: 'var(--purple)' }}>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
