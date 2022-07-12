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
    'Welcome to my website.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/shravan-honaganahalli-300141188/',
    github: 'https://github.com',
  },
}

const work = [
  // Work can be added an removed
  // if there are no Work, Work section won't show up
  {
    name: 'Work Experience 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  // {
  //   name: 'Project 2',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
  {
    name: 'Work Experience 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shravan_ph@yahoo.com',
}

export { header, about, work, skills, contact }
