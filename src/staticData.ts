
export const projectsToShowcase = ['Emoji Tack Toes', 'Simple Pokedex', 'My Bubble']


const imageUri = [
  {
    src: require('./assets/techLogo/logo.svg'),
    key: 0
  },
  {
    src: require('./assets/techLogo/logo_raw.svg'),
    key: 1
  },
  {
    src: require('./assets/techLogo/paper-logo.png'),
    key: 2
  },
  {
    src: require('./assets/techLogo/reactNativeLogo.png'),
    key: 3
  }
]
const imageUri2 = [
  {
    src: require('./assets/techLogo/logo.svg'),
    key: 0
  },
  {
    src: require('./assets/techLogo/logo_raw.svg'),
    key: 1
  },
  {
    src: require('./assets/techLogo/paper-logo.png'),
    key: 2
  }
]
export { imageUri, imageUri2 }

const customAnimConfig = { mass: 1, tension: 30, friction: 10 }
const slowAnimConfig = { mass: 1, tension: 56, friction: 50 }
export { customAnimConfig, slowAnimConfig }

type projectImgT = { image: string, description: string, }
type projectT = { desktopImages: projectImgT[], mobileImgs: projectImgT[] }
export const staticProjects: projectT[] = [
  {
    desktopImages: [
      {
        image: require('./assets/macImageExamp.png'),
        description: 'sdsd'
      },
      {
        image: require('./assets/macImageExamp.png'),
        description: 'sdsd'
      },
    ],
    mobileImgs: [
      {
        image: require('./assets/app images/Screenshot_20200629-225357_Simple Pokedex.jpg'),
        description: 'sdsd'
      },
      {
        image: require('./assets/app images/Screenshot_20200629-225357_Simple Pokedex.jpg'),
        description: 'sdsd'
      },
      {
        image: require('./assets/app images/Screenshot_20200629-225401_Simple Pokedex.jpg'),
        description: 'sdsd'
      },
    ],
  },
  {
    desktopImages: [
      {
        image: require('./assets/app images/Screenshot_20200629-225350_Simple_Pokedex.jpg'),
        description: 'sdsd'
      },
      {
        image: require('./assets/app images/Screenshot_20200629-225350_Simple_Pokedex.jpg'),
        description: 'sdsd'
      },
    ],
    mobileImgs: [
      {
        image: 'sdsd',
        description: 'sdsd'
      }
    ],
  },
]