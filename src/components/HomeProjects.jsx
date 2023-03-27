import { Link } from "react-router-dom"
import githubLogo from '../img/github-logo.png'
const HomeProjects = () => {
  return (
    <div className="grid grid-cols-2 py-20">
        <h2 className='self-center pb-5 text-center text-5xl font-bold'>My Projects</h2>
        <div className="right-section">
            <h3 className='text-xl font-bold'>Please visit the Projects page or my GitHub to see what I have been working on.</h3>
            <div className="button-section flex w-1/2">
                <Link to='/projects'>
                    <button className="btn btn-primary mt-5 mr-5">Projects</button>
                </Link>
                <a href="https://github.com/amherro">
                    <button className="btn btn-primary mt-5 mr-5">
                        Github
                        <img src={githubLogo} alt="GitHub Logo" className="github-logo-btn" />
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default HomeProjects