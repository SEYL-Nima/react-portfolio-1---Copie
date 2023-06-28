import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {SiBookstack} from 'react-icons/si'
import {GiSkills} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
           <div className="about__me-image">
            <img src={ME} alt="About Image" />
           </div>
      </div>

           <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>

                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>8 month internship</small>
              </article>

              <article className='about__card'>
                <SiBookstack className='about__icon'/>
                <h5>Education</h5>
                <small>Graduated CESI School of Computer Engineering

                </small>
              </article>

              <article className='about__card'>
                <GiSkills className='about__icon'/>
                <h5>Skills</h5>
                <small>Communication Autonomy Adaptability</small>
              </article>
            </div>

            <p>
            I am a motivated and dedicated computer engineering student in my third year at CESI School, eager to put my skills to use as a System and Network Administrator. My studies have provided me with a strong foundation in network analysis, system administration, and web development, which I have honed through hands-on projects using various tools and languages such as HTML, SQL, Python, and C#.

In addition to my academic pursuits, I have a passion for music and playing instruments such as guitar and piano. I also love participating in team sports, which has taught me the importance of teamwork and collaboration.

My professional experience in network security has allowed me to acquire and strengthen my knowledge in Active Directory and security, and I am eager to apply, share, and deepen my expertise within a dynamic and fulfilling team environment. I am hardworking, detail-oriented, and driven, and I am confident that I can bring my technical and interpersonal skills to meet the challenges of any role.
            </p>

            <a href="#contact" className = 'btn btn-primary'>We Can Chat Here</a>

           </div>

      </div>
    </section>
  )
}

export default About