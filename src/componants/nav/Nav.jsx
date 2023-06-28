import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {FaUserAlt} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {RiComputerFill} from 'react-icons/ri'
import {MdConnectWithoutContact} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
<nav>
  <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active': ''} ><ImHome/></a>
  <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active': ''} ><FaUserAlt/></a>
  <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'active': ''}><MdWork/></a>
  <a href="#services"onClick={() => setActiveNav('#services')} className={activeNav==='#services' ? 'active': 'services'}><RiComputerFill/></a>
  <a href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav==='#contact' ? 'active': 'contact'}><MdConnectWithoutContact/></a>

</nav>

  )
}

export default Nav