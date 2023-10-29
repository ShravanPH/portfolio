import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import SPH2024 from '../SPH2024.pdf'
import me from '../../assets/me.jpg'

const About = () => {
  const { name, role, description,resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <div>
        <div style={{ textAlign:'center'}}>
        <img src={me} alt='acm' className='about__img' /> 
        </div>

        <h1 style={{ textAlign:'center'}}>
          Hi, Im <span className='about__name'>{name}.</span>
        </h1>
        </div>
      )}

      <div style={{ textAlign:'center'}}>
        {role && <h2 className='about__role' >{role}</h2>}
        <p className='about__desc' >{description && description}</p>
        <div style={{marginTop:50}}> 
            <a href={SPH2024}>
              <span type='button' className='btn btn--outline '>
                Resume
              </span>
            </a>
            {social && (
            <>
              {social.github && (
                
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
      </div>
      

    </div>
  )
}

export default About
