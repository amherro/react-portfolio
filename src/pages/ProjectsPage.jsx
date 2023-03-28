import Header from '../components/Header'
import Project from '../components/Project'
import Projects from '../projectsList'

const ProjectsPage = () => {
    return (
        <div>
            <Header title='My Projects' />
            {/* <div className="grid lg:grid-cols-3 md:grid-cols-1 col-auto justify-items-center w-2/3 gap-2 m-auto">
                {Projects.map(project => (
                    <Project key={project.id} id={project.id} source={project.img} title={project.title} screenshot={project.img} description={project.description} liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
                ))}
            </div> */}
            <div className="flex flex-wrap justify-center">
                {Projects.map(project => (
                    <Project className='image-size' key={project.id} id={project.id} source={project.img} title={project.title} screenshot={project.img} description={project.description} liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsPage