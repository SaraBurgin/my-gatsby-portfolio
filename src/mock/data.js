import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sara González | Frontend Developer', // e.g: 'Name | Developer'
  lang: 'EN, ES, IT', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Sara González Burgin',
  subtitle: 'I am a Junior Frontend Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'sara.jpg',
  paragraphOne:
    'I am a Junior Frontend developer that pays great attention to detail, thoroughly enjoys a challenge and has a passion for user experience that has evolved with my continuous learning of programming.',
  paragraphTwo:
    'My strongest tech skills are HTML/CSS and Javascript using React.js as a framework. The Bootcamp I attended was definitely what plunged me into the programming world and helped me through the mind shift but my continuous learning after the Bootcamp are what have established my knowledge.',
  paragraphThree:
    "I am seeking the position of a Junior Frontend developer where I would like my development skills and eye for UX to flow simultaneously within a team of experimented professionals. I'm open to trying new technologies but my preference would be to work with HTML, CSS, JavaScript, React.js, Next.js, Gatsby or Bootstrap.",
  resume: 'https://www.dropbox.com/s/mcv1b68mguxbpwc/CV_Sara%20Gonzalez.pdf?dl=0', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
