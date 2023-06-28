import React from 'react'
import'./contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {GrLinkedin} from 'react-icons/gr'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2li6k1k', 'template_fnjak0m', form.current, 'fm5rk8d5v__UMaZd3')

    e.target.reset()
     
  };

  return (
    <section id='contact'>
      <h5>Want to know further ?</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>MerakebLyes@outlook.com</h5>
            <a href="mailto:MerakebLyes@outlook.com">Send a message</a>
          </article>

          <article className="contact__option">
            <GrLinkedin className='contact__option-icon'/>
            <h4>LinkedIn Messenger</h4>
            <h5>https://www.linkedin.com/in/merakeb-lyes/</h5>
            <a href="https://www.linkedin.com/in/merakeb-lyes/" target="_blank">Connect with me on LinkedIn</a>
          </article>

        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email'required/>
          <textarea name="message" row="7" placeholder='Your Message' required> </textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact