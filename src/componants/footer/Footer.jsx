import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import './footer.css'


const Footer = () => {
  return (
    <footer>
      <a href="#" className ='footer__logo'>Lyes.L.MERAKEB</a>

      <ul className='permalinks'>
        <li><a href="#" >Home</a></li>
        <li><a href="#about" >About</a></li>
        <li><a href="#experience" >Experience</a></li>
        <li><a href="#services" >Services</a></li>
        <li><a href="#portfolio" >Portfolio</a></li>
        <li><a href="#testimonials" >Testimonials</a></li>
        <li><a href="#contact" >Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/merakeb-lyes/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/SEYL-Nima" target="_blank"><BsGithub/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; Lyes.L.MERAKEB. ALL rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer