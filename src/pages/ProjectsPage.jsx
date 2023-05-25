import Header from '../components/Header'
import Project from '../components/Project'
import Projects from '../projectsList'

const ProjectsPage = () => {
    return (
        <div>
            <Header title='My Projects' />
            <div className="flex flex-wrap justify-center">
                {Projects.map(project => (
                    <Project className='image-size' key={project.id} id={project.id} source={project.img} title={project.title} screenshot={project.img} description={project.description} liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsPage