import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__network">
          <h3>Network & System administration</h3>
          <div className="experience__content"></div>
          <article className='experience__details'></article>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <h4>TCP/IP, DHCP, DNS Protocol</h4>
          <small className='text-light'>Experienced</small>

          <article className='experience__details'></article>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <h4>Virtualization VMWare/VirtuelBox
</h4>
          <small className='text-light'>Experienced</small>
          
          <article className='experience__details'></article>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <h4>Windows Server 2019
</h4>
          <small className='text-light'>Interdmediate</small>

          <article className='experience__details'></article>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <h4>Active Directory
</h4>
          <small className='text-light'>Interdmediate</small>

          <article className='experience__details'></article>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <h4>Firewall (PfSense)
</h4>
          <small className='text-light'>Intermediate</small>

          <article className='experience__details'></article>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <h4>PowerShell</h4>
          <small className='text-light'>Novice</small>

        </div>



        {/* END of NETWORKING*/}






        <div className="experience__developper">
        <h3>Developper</h3>
          <div className="experience__content"></div>
          <article className='experience__details'></article>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <h4>C#</h4>
          <small className='text-light'>Novice</small>

          <article className='experience__details'></article>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <h4>HTML, CSS, React, PHP
</h4>
          <small className='text-light'>Intermediate</small>
          
          <article className='experience__details'></article>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <h4>SQL
</h4>
          <small className='text-light'>Interdmediate</small>

          <article className='experience__details'></article>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <h4>Python
</h4>
          <small className='text-light'>Interdmediate</small>

          <article className='experience__details'></article>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <h4>C
</h4>
          <small className='text-light'>Novice</small>

          <article className='experience__details'></article>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <h4>C++</h4>
          <small className='text-light'>Novice</small>






        </div>
          
        </div>

      


    
    </section>
  )
}

export default Experience   