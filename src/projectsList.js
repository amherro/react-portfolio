import libraryPhoto from './img/library_screenshot.png'
import calcImg from './img/Calculator_Img.png'
import etchImg from './img/Etch_A_Sketch_Img.png'
import resumeImg from './img/resume-creator-img.png'
import huntingImg from './img/Hunting_Guide_Img.png'
import googleImg from './img/Google_Home_Img.png'

const Projects = [
    {
        id: 1,
        title: 'Resume Creator',
        img: resumeImg,
        description: 'A React resume creator.',
        liveUrl: 'https://amherro.github.io/CV-React-App/',
        githubUrl: 'https://github.com/amherro/CV-React-App'
    },
    {
        id: 2,
        title: 'Library App',
        img: libraryPhoto,
        description: 'A library web app to keep track of all the books in your life. This project uses ES6 classes to handle the logic, as well as local storage so users can save their entries in their browser.',
        liveUrl: 'https://amherro.github.io/Library/',
        githubUrl: 'https://github.com/amherro/Library'
    },
    {
        id: 3,
        title: 'Mobile Calculator',
        img: calcImg,
        description: 'A mobile calculator',
        liveUrl: 'https://amherro.github.io/Calculator-App/',
        githubUrl: 'https://github.com/amherro/Calculator-App' 
    },
    {
        id: 4,
        title: 'Etch-A-Sketch',
        img: etchImg,
        description: 'An etch-a-sketch',
        liveUrl: 'https://amherro.github.io/Etch-A-Sketch/',
        githubUrl: 'https://github.com/amherro/Etch-A-Sketch'
    },
    {
        id: 5,
        title: 'Hunting Website',
        img: huntingImg,
        description: 'A hunting landing page',
        liveUrl: 'https://amherro.github.io/Hunting-Guide-Page/',
        githubUrl: 'https://github.com/amherro/Hunting-Guide-Page'
    },
    {
        id: 6,
        title: 'Google Homepage',
        img: googleImg,
        description: 'An HTML and CSS clone of the Google search page.',
        liveUrl: 'https://amherro.github.io/Google-Homepage/',
        githubUrl: 'https://github.com/amherro/Google-Homepage'
    },
]

export default Projects