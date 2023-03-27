import { Link } from "react-router-dom"
const HomeProjects = () => {
  return (
    <div className="grid grid-cols-2 py-20">
        <h2 className='self-center pb-5 text-center text-5xl font-bold'>My Projects</h2>
        <div className="right-section">
            <h3 className='text-xl font-bold'>Please visit the Projects page to see what I have been working on.</h3>
            <div className="button-section flex w-1/2">
                <Link to='/projects'>
                    <button className="btn btn-primary mt-5 mr-5">Projects</button>
                </Link>
                <Link to='contact'>
                    <button className="btn btn-primary mt-5 mr-5">Contact</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HomeProjects