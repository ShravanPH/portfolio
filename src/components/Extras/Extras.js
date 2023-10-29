import uniqid from 'uniqid'
import { Button } from '@material-ui/core'
import { extras } from '../../portfolio'
import WorkContainer from '../WorkContainer/WorkContainer'
import './Extras.css'

const Extras = () => {
  if (!extras.length) return null

  return (
    <section id='Work' className='section Work'>
      <h2 className='section__title'>Extra curriculars</h2>

      <div className='Work__grid'>
        {extras.map((project) => (
          <WorkContainer key={uniqid()} project={project} />
        ))}
      </div>

    </section>
  )
}

export default Extras
