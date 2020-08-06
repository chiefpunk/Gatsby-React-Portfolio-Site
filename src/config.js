module.exports = {
  siteTitle: 'Maksim Damaskin | Front-End Developer',
  siteDescription:
    'Maksim Damaskin is a front-end web developer who is comfortable with architecting and implementing scalable and maintainable web app/services with the TDD/BDD approach.',
  siteKeywords:
    'Maksim Damaskin, Maksim, Damaskin, Front-End Developer, front-end engineer, web developer, javascript, northeastern',
  siteUrl: 'https://maksim-damaskin.netlify.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Maksim Damaskin',
  location: 'Vladivostok, RU',
  email: 'webdevstar14@gmail.com',
  github: 'https://github.com/RisingStar-Web',
  twitterHandle: '@maksim_damaskin',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/RisingStar-Web',
    },
    // {
    //   name: 'Linkedin',
    //   url: 'https://www.linkedin.com/in/maksim_damaskin',
    // },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/maksim_damaskin',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/maksim_damaskin',
    // },
    {
      name: 'Twitter',
      url: 'https://twitter.com/maksim_damaskin',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#0000ff',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
