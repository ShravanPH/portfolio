import uniqid from 'uniqid'
import { Button } from '@material-ui/core'
import { extras } from '../../portfolio'
import ExtraContainer from '../ExtraContainer/ExtraContainer'
import './Extras.css'

const Extras = () => {
  if (!extras.length) return null

  return (
    <section id='extras' className='section extras'>
      <h2 className='section__title'>Education & Projects</h2>

      <div className='extra__grid'>
        {extras.map((project) => (
          <ExtraContainer key={uniqid()} project={project} />
        ))}
      </div>

    </section>
  )
}

export default Extras
