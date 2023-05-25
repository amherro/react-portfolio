import toDoPhoto from './img/todo-app.png'
import libraryPhoto from './img/library_screenshot.png'
import calcImg from './img/Calculator_Img.png'
import etchImg from './img/Etch_A_Sketch_Img.png'
import resumeImg from './img/resume-creator-img.png'
import huntingImg from './img/Hunting_Guide_Img.png'
import googleImg from './img/Google_Home_Img.png'

const Projects = [
    {
        id: 1,
        title: 'To Do App',
        img: toDoPhoto,
        description: 'A to-do app built in React using functional components. It also utilizes the Context API to handle global state. Local Storage is used to save the user\'s to-do items so the data persists across browser sessions. This project also uses Tailwind CSS and Daisy UI components for a simple yet elegant design.',
        liveUrl: 'https://todo-app-pro3.onrender.com',
        githubUrl: 'https://github.com/amherro/to-do-react-app'
    },
    {
        id: 2,
        title: 'Resume Creator',
        img: resumeImg,
        description: 'A React resume creatorbuilt using React classes to handle the functionality, and CSS stylesheets to handle the design. It makes heavy use of state and props to interact with the virtual DOM.',
        liveUrl: 'https://amherro.github.io/CV-React-App/',
        githubUrl: 'https://github.com/amherro/CV-React-App'
    },
    {
        id: 3,
        title: 'Library App',
        img: libraryPhoto,
        description: 'A library web app to keep track of all the books in your life. This project uses ES6 classes to handle the logic, as well as local storage so users can save their entries in their browser.',
        liveUrl: 'https://amherro.github.io/Library/',
        githubUrl: 'https://github.com/amherro/Library'
    },
    {
        id: 4,
        title: 'Mobile Calculator',
        img: calcImg,
        description: 'A mobile calculator that uses event listeners to listen for clicks on each button and sets the text content to the button’s value. It includes the ability to work with negative numbers, decimals, and take the square root of any number. It is designed with mobile responsiveness in mind to allow it to work and display on any screen size.',
        liveUrl: 'https://amherro.github.io/Calculator-App/',
        githubUrl: 'https://github.com/amherro/Calculator-App' 
    },
    {
        id: 5,
        title: 'Etch-A-Sketch',
        img: etchImg,
        description: 'Inspired by the popular toy, this Etch-A-Sketch clone uses CSS Grid to render the drawing area, as well as loops and event listeners to handle the drawing. Users can draw in black and white, or use random colors generated by JavaScript. Users can also have an eraser tool, and can resize the canvas up to 65x65 squares.',
        liveUrl: 'https://amherro.github.io/Etch-A-Sketch/',
        githubUrl: 'https://github.com/amherro/Etch-A-Sketch'
    },
    {
        id: 6,
        title: 'Hunting Website',
        img: huntingImg,
        description: 'This project is a landing page for a fake hunting outfitter. It was one of the first projects I did to gain practical experience in HTML and CSS. It also uses JavaScript event listeners to open and close the menu.',
        liveUrl: 'https://amherro.github.io/Hunting-Guide-Page/',
        githubUrl: 'https://github.com/amherro/Hunting-Guide-Page'
    },
    {
        id: 7,
        title: 'Google Homepage',
        img: googleImg,
        description: 'This clone of the Google home page was my very first project I worked on while learning HTML and CSS. I was able to use all of the basics of both languages as well as experiment with other concepts like Grid and Flexbox.',
        liveUrl: 'https://amherro.github.io/Google-Homepage/',
        githubUrl: 'https://github.com/amherro/Google-Homepage'
    },
]

export default Projects