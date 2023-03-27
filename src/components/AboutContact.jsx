import { Link } from "react-router-dom"

const AboutContact = () => {
  return (
    <div className='grid grid-cols-2 p-10'>
        <div className="about-section card card-bordered bg-base-200 w-1/2 justify-self-center">
            <h2 className='card-title self-center p-3 text-5xl font-bold'>About Me</h2>
            <p className='card-body'>Visit the About page to learn a little more about who I am.</p>
            <Link to='/about' className="card-actions justify-center mt-0">
                <button className="btn btn-primary mb-4 self-center w-1/2">About</button>
            </Link>
        </div>
        <div className="about-section card card-bordered bg-base-200 w-1/2 justify-self-start">
            <h2 className='card-title self-center p-3 text-5xl font-bold'>Contact</h2>
            <p className='card-body'>Visit the Contact page if you would like to get in touch or are interested in working together.</p>
            <Link to='/contact' className="card-actions justify-center">
                <button className="btn btn-primary mb-4 self-center w-1/2">Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default AboutContact