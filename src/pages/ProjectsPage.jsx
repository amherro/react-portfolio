import Header from '../components/Header'
import Project from '../components/Project'
import libraryPhoto from '../img/library_screenshot.png'

const ProjectsPage = () => {
    return (
        <div>
            <Header title='My Projects' />
            <div className="grid grid-cols-3">
                <Project source={libraryPhoto} title='Library App' screenshot={libraryPhoto} description='A library web app to keep track of all the books in your life. This project uses ES6 classes to handle the logic, as well as local storage so users can save their entries in their browser.' liveUrl='https://amherro.github.io/Library/' githubUrl='https://github.com/amherro/Library' />
            </div>
        </div>
    )
}

export default ProjectsPage