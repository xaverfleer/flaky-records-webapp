import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Flaky Records', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Flaky Records is a Glasgow based record label.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'FLAKY',
  name: 'RECORDS',
  subtitle: 'A phonygraphic record label',
  cta: 'WHAT?',
};

// ABOUT DATA
export const aboutData = {
  img: 'flaky-logo.png',
  paragraphOne:
    'Flaky Records is a Glasgow-based record label facilitated by a no-hit wonder who releases' +
    ' records that no-one listens to.',
  paragraphTwo: "Please send links to your band's music by clicking the link below.",
  paragraphThree:
    "As a crumbling curmudgeon with Dinosaur (Jr.) tastes in music, I probably won't " +
    " understand what your band is trying to accomplish other than rip-off something we've heard a " +
    ' billion times before.',
  resume: 'mailto:info@lylechristine.com', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lyle-03.png',
    title: 'Lyle Christine',
    info: 'Glasgow-based musician. Patience of a toddler. Radioactive levels of cynicism.',
    info2:
      "Currently working on album number 10. Click below to listen to 'Funraiser', released" +
      ' earlier in 2020.',
    url: 'https://www.lylechristine.com',
    repo: 'https://lylechristine.com/albums/funraiser/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'The Big Apple',
    info: 'The whole of New York City recently formed a band and signed to Flaky Records.',
    info2:
      'All 8.4m residents of New York City are currently remotely recording and uploading their individual parts for the' +
      ' debut album from The Big Apple. Filenames have proved challenging.',
    url: 'https://www.youtube.com/watch?v=ylKxR6oZJE0',
    repo: 'https://www.youtube.com/watch?v=ylKxR6oZJE0', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Confused?',
  btn: 'Email',
  email: 'info@lylechristine.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.twitter.com/PithyArtist',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
