import uniqid from 'uniqid'
import { work } from '../../portfolio'
import WorkContainer from '../WorkContainer/WorkContainer'
import './Work.css'

const Work = () => {
  if (!work.length) return null

  return (
    <section id='Work' className='section Work'>
      <h2 className='section__title'>Work</h2>

      <div className='Work__grid'>
        {work.map((project) => (
          <WorkContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Work
