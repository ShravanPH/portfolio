import intel from "./assets/intel.png"
import frb from "./assets/frb.svg"
import oracle from "./assets/oracle.png"
import acm from './assets/acm.svg'
import iit from './assets/iit.png'
import project from './assets/projects.png'



const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.google.com',
  title: 'SH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shravan Honaganahalli',
  role1: 'Pianist  🎹 ',
  role2: '\n Software Engineer 👨🏻‍💻 \n',
  role3: ' Tennis Player 🎾',
  description:
    'Throughout my academic and professional journey, I have been captivated by the world of computers and technology. This lifelong fascination has fueled my dedication to pursuing a career in computer science. ',
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
    year: "May - August 2023",
    description:`${
      `
      Led critical advancements in Oracle's Access Governance Cloud Service by
      conceptualizing and designing innovative 
      fullstack solutions for the Identity attributes feature.
      
      `
      }`,
    stack: ['Java', 'React'],
    date:"June 2022 - August 2022",
    img:oracle,
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Intel Corporation',
    title:"Software Engineering Intern",
    year: "May - August 2022",
    description:`${
      `
      Designed and developed IDEALDash, an innovative cross-platform system prototype that addressed the limitations of Intel's 
      legacy applications and enabled engineers to enhance the accuracy of their yield analyses by 14%.
      
      `
      }`,stack: ['Python Flask',"React","MySql","Plotly"],
    date:"June 2022 - August 2022",
    img:intel,
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'The Federal Reserve Bank of Chicago',
    title:"Software Engineering Intern",
    year: "June - August 2021",
    description:`${
      `
      Sprint leader for the intern team. Improved feature ticket completion rate by 30% by implementing better coding practices. 
      Synchronized sprints with the main development team which led to successful deployment of features to production. 
      Enhanced overall team efficiency.
      `
      }`
      ,stack: ['Java',' MySQl','React','Jenkins'],
    img:frb,
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  
]

const extras = [
  // Work can be added an removed
  // if there are no Work, Work section won't show up
  {
    name: 'Illinois Institute of Technology',
    title:`${`Bachelor of Science, Computer Science – Senior.
    August 2020 - May 2024.`}`,
    description:`${
    `
    •	Association for Computing Machinery (ACM), Illinois Tech Chapter - President.\n 
    •	Dean’s List – Spring 2022, Fall 2022.\n
    •	Demonhacks Hackathon - Microsoft and GitHub category winner. \n
    •	Relevant Coursework - Data structures & Algorithms and Introduction to A.I.\n
    `
    }`,
   
    
    stack: ['SASS', 'TypeScript', 'React'],
    date:"June 2022 - August 2022",
    img:iit,
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Projects',
    title:" Relevant work and passion projects.\n  March 2022 - August 2023.",
    description:false,
    description1:`${
    `
    • Spotify Skip – Google Chrome extension | Vanilla JS & Chrome API 
    
    `
    }`,
    description2:`${
    `
    • TradeOrTreat – Candy Marketplace | React, Express, MongoDB, Azure, Google Cloud 
    
    `
    }`,
    description3:`${
    `
    • Instafetch – Instagram to website builder | Java, Spring, MySQL, React, AWS S3 & EC2 April 
   
    `
        }`,
   
    
    stack: ['SASS', 'TypeScript', 'React'],
    date:"June 2022 - August 2022",
    img:project,
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
