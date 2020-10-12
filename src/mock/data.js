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
  name: 'Sara.',
  subtitle: 'I am a Junior Frontend Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'sara2.jpg',
  paragraphOne:
    'I am a Junior Frontend developer that pays great attention to detail, thoroughly enjoys a challenge and has a passion for user experience that has evolved with my continuous learning of programming.',
  paragraphTwo:
    'My strongest tech skills are HTML/CSS and Javascript using React.js as a framework.',
  paragraphThree:
    'The Bootcamp I attended was definitely what plunged me into the programming world and helped me through the mind shift but my continuous learning after the Bootcamp are what have established my knowledge.',

  resume: 'https://www.dropbox.com/s/6g4i868ebu6auhn/CV_Sara%20Gonzalez.pdf?dl=0', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cheeseit2.png',
    title: 'Cheese it!',
    info:
      'From the initial business idea to what you see today, this E-commerce project was thoughout and developed by me.',
    info2: `Tech stack:
    - Wireframed in Figma
    - JSX
    - JavaScript
    - React.js
    - Next.js
    - Ley migrations
    - PostrgreSQL database
    - CSS Grid
    - Styled-components
    - Bootstrap
    - Media queries
    - Deployment on Heroku`,
    url: 'https://cheeseit-ecommerce.herokuapp.com/',
    repo: 'https://github.com/SaraBurgin/ecommerce-store-next-js', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'laeradelvillordo2.png',
    title: 'La Era del Villordo.',
    info: 'I am currently re-designing and building the website for a Rental Villa in Spain.',
    info2: `Tech stack:
        - Designed in Canva
        - JSX
        - JavaScript
        - React.js
        - Next.js
        - CSS Grid
        - Styled-components
        - Bootstrap
        - Media-queries
        - Deployment on Vercel`,
    url: 'https://la-era-del-villordo.vercel.app/',
    repo: 'https://github.com/SaraBurgin/la-era-del-villordo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'buman2.png',
    title: 'Burgin Holiday Management.',
    info: 'Design for new website for rental home managers in Costa del Sol, Málaga.',
    info2: `Tech stack:
        - Canva`,
    url: 'https://www.canva.com/design/DAD-OEBMRW0/dfrjgz0dVv7bv6610U8-zQ/edit',
  },
  {
    id: nanoid(),
    img: 'theimagegallery2.png',
    title: 'The Image Gallery.',
    info: 'Built an image Gallery from scratch.',
    info2: `Tech stack:
        - HTML
        - CSS
        - BOOTSTRAP
        - Deployed on Vercel`,
    url: 'https://image-gallery-psi.vercel.app/gallery.html',
    repo: 'https://github.com/SaraBurgin/image-gallery', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'reacttodolist.png',
    title: 'React TODO List.',
    info: 'React TODO List built with React.js.',
    info2: `Tech stack: 
        - JSX
        - CSS 
        - Styled-components
        - JavaScript
        - React.js
        - Deployed on Netlify`,
    url: 'https://musing-golick-ea66e2.netlify.app/',
    repo: 'https://github.com/SaraBurgin/react-todo-list', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'saragonzalezburgin@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sara-gonzalez-burgin/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/SaraBurgin',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
