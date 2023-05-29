import { Link } from "react-router-dom"
import githubLogo from '../img/github-logo.png'
const HomeProjects = () => {
  return (
    <div className="grid md:grid-cols-2 py-20">
        <h2 className='self-center pb-5 text-center text-5xl font-bold'>My Projects</h2>
        <div className="right-section flex flex-col items-center md:items-start">
            <h3 className='text-xl font-bold w-4/5'>Please visit the Projects page or my GitHub to see what I have been working on.</h3>
            <div className="button-section flex md:w-1/2">
                <Link to='/projects'>
                    <button className="btn btn-primary bg-green-700 border-green-700 hover:bg-green-900 hover:border-green-900 mt-5 mr-5">Projects</button>
                </Link>
                <a href="https://github.com/amherro">
                    <button className="btn btn-primary bg-green-700 border-green-700 hover:bg-green-900 hover:border-green-900 mt-5 mr-5 flex w-32">
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