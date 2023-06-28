import React from 'react'
import CV from '../../assets/CV_Lyes_MERAKEB_EN.pdf'

const CTA  = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> Download CV </a>
        <a href="#contact" className='btn btn-primary'>We Can Chat Here!</a>
    </div>
  )
}

export default CTA