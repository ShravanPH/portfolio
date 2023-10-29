import intel from "./assets/intel.png"
import frb from "./assets/frb.svg"
import oracle from "./assets/oracle.png"
import acm from './assets/acm.svg'


const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.google.com',
  title: 'SH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shravan Honaganahalli',
  role: 'Software Engineer',
  description:
    'Throughout my academic and professional journey,  I have been captivated by the world of computers and technology. This lifelong fascination has fueled my dedication to pursuing a career in computer science. ',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/shravan-honaganahalli-300141188/',
    github: 'https://github.com/ShravanPH',
  },
}

const work = [
  // Work can be added an removed
  // if there are no Work, Work section won't show up
  {
    name: 'Oracle',
    title:"Software Engineering Intern",
    description:
      'Developed a cross platform distributed systems prototype that efficiently tackles the limitations of Intel’s IDEAL (Interactive Data Exploration and Learning) suite of applications',
    stack: ['SASS', 'TypeScript', 'React'],
    date:"June 2022 - August 2022",
    img:oracle,
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Intel Corporation',
    title:"Software Engineering Intern",
    description:
      'Developed a cross platform distributed systems prototype that efficiently tackles the limitations of Intel’s IDEAL (Interactive Data Exploration and Learning) suite of applications',
    stack: ['SASS', 'TypeScript', 'React'],
    date:"June 2022 - August 2022",
    img:intel,
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'The Federal Reserve Bank of Chicago',
    title:"Software Engineering Intern",
    description:
      'Developed a cross platform distributed systems prototype that efficiently tackles the limitations of Intel’s IDEAL (Interactive Data Exploration and Learning) suite of applications',
    stack: ['SASS', 'TypeScript', 'React'],
    img:frb,
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  
]

const extras = [
  // Work can be added an removed
  // if there are no Work, Work section won't show up
  {
    name: 'ACM - President',
    title:"",
    description:`${
    `Bachelor of Science, Computer Science – Senior
    •	Association for Computing Machinery, Illinois Tech Chapter - President.
    •	Dean’s List – Spring 2022, Fall 2022.
    •	Demonhacks Hackathon - Microsoft and GitHub category winner.
    •	Relevant Coursework - Data structures & Algorithms and Introduction to A.I.
    `
    }`,
   
    
    stack: ['SASS', 'TypeScript', 'React'],
    date:"June 2022 - August 2022",
    img:acm,
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
 
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python', 'Java', 'C' ,'SQL', 'Javascript', 'Git'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shravan_ph@yahoo.com',
}

export { header, about, work, skills, contact,extras }
