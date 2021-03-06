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
  img: 'sara.jpg',
  paragraphOne:
    'I am a Junior Frontend developer that pays great attention to detail, thoroughly enjoys a challenge and has a passion for User Experience that has evolved with my continuous learning of programming.',
  paragraphTwo:
    'My strongest tech skills are HTML/JSX, SCSS and Javascript using Next.js as a React.js framework.',
  paragraphThree:
    'The Bootcamp I attended plunged me into the programming world, gave me the rush and helped me through the mind shift but it is the continuous learning after that has established my knowledge.',

  resume: 'https://www.dropbox.com/s/7w5i8h7v0zqse4l/Sara%20Gonzalez_CV.pdf?dl=0', // if no resume, the button will not show up
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
    - CSS
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
        - CSS
        - Styled-components
        - Bootstrap
        - Media-queries
        - Deployment on Vercel`,
    url: 'https://la-era-del-villordo.vercel.app/',
    repo: 'https://github.com/SaraBurgin/la-era-del-villordo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pokedex.png',
    title: 'Pokedex.',
    info: 'Pokedex built using axios to get data from the official Pokemon API.',
    info2: `Tech stack:
        - JSX
        - JavaScript
        - axios
        - React.js
        - Next.js        
        - Styled-components
        - Bootstrap
        - Jest
        - Deployment on Vercel`,
    url: 'https://pokedex-app-euqupd741.vercel.app/',
    repo: 'https://github.com/SaraBurgin/pokedex-app/', // if no repo, the button will not show up
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
    title: 'The fully responsive Image Gallery.',
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
    img: 'todolist.png',
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
  {
    id: nanoid(),
    img: 'eventDEMO.png',
    title: 'Event DEMO.',
    info: 'Event DEMO wireframed in Figma.',
    info2: `Tech stack: 
        - FIGMA`,
    url: 'https://www.figma.com/file/0fBVDvWHK9wquqdvnkdwlt/Event_DEMO?node-id=1%3A2',
    // if no repo, the button will not show up
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
