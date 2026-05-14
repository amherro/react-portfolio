import Header from '../components/Header'
import Project from '../components/Project'
import Projects from '../projectsList'

const ProjectsPage = () => {
    return (
        <div>
            <Header />
            <div className="content-container pt-[125px]">
                <h1 className='page-title'>My Projects</h1>
                <div className="project-page-grid">
                    {Projects.map(project => (
                        <Project className='image-size' key={project.id} id={project.id} source={project.img} title={project.title} screenshot={project.img} description={project.description} liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage