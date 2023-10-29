import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './WorkContainer.css'

const WorkContainer = ({ project }) => (

  <div className='project' >
    <img src={project.img} alt = "companies" className='project__img'/>
    <h3  className='project__name'>{project.name}</h3>
    <i><h4 className='project__title'>{project.title}</h4></i>

    <hr style={{borderTop:"3px solid black",marginTop:"60px"}}/>
    <p className='project__description'>{project.description}</p>

    {/* {console.log(project.description)} */}
  

    {/* <p className='project__description'>{project.title}</p> */}
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
              <i> <b >{item}</b></i> 
          </li>
        ))}
      </ul>
    )}


  </div>
)

export default WorkContainer
