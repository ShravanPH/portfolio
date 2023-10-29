import uniqid from 'uniqid'
import './ExtraContainer.css'

const ExtraContainer = ({ project }) => (

  <div className='extra'>
    <img src={project.img} alt = "companies" className='extra__img'/>
    <h3  className='extra__name'>{project.name}</h3>
    <i><h4 className='extra__title'>{project.title}</h4></i>

    <hr style={{borderTop:"3px solid black",marginTop:"40px"}}/>
    
    {project.description ?
      <p className='extra__description'>{project.description}</p>
      :
      <div>
      <p className='extra__description'>{project.description1}</p>
      <p className='extra__description'>{project.description2}</p>
      <p className='extra__description'>{project.description3}</p>
      </div>
      }

  </div>
)

export default ExtraContainer
