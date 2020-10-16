import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '| Flaky Records |', // e.g: 'Name | Developer'
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
  img: 'profile.jpg',
  paragraphOne: 'I wake up and eat shit - this is paragraph 1',
  paragraphTwo: 'I got to sleep and dream about eating shit - this paragraph 2',
  paragraphThree: 'I wake up in the middle of the night and need to pee - this is para 3',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Lyle Christine',
    info: 'Glasgow based musician',
    info2: 'Currently working on album #10',
    url: 'https://www.lylechristine.com',
    repo: 'https://www.lyleslatestalbum.com', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'SPAM',
    info: "Scotland's answer to the Smashing Pumpkins",
    info2: 'No records or tours, but cool guitar stickers',
    url: 'https://www.thisisspam.com',
    repo: 'https://www.latstalbum.com', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Jenny Jerry and the Jender Benders',
    info: 'Super group featuring Jenni Jeffries and the Geoffrey Twins',
    info2: 'Debut album after COVID fucks off',
    url: 'https://JJJJJJJJJJ.com',
    repo: 'https://latestrecord.com', // if no repo, the button will not show up
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
