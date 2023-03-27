import Header from '../components/Header'
import Project from '../components/Project'
import libraryPhoto from '../img/library_screenshot.png'

const ProjectsPage = () => {
    return (
        <div>
            <Header title='My Projects' />
            <div className="grid grid-cols-3">
                <Project source={libraryPhoto} title='Library App' />
            </div>
        </div>
    )
}

export default ProjectsPage