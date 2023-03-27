import { Link } from "react-router-dom"

const AboutContact = () => {
  return (
    <div className='grid grid-cols-2'>
        <div className="about-section flex-col">
            <h2 className='text-5xl font-bold text-center'>About Me</h2>
            <p className='text-center'>Visit the About page to learn a little more about who I am.</p>
            <Link to='/about'>
                <button className="btn btn-primary mt-5 self-center">About</button>
            </Link>
        </div>
        <div className="contact-section flex-col">
            <h2 className='text-5xl font-bold text-center'>Contact</h2>
            <p className='text-center'>Visit the Contact page if you would like to get in touch or are interested in working together.</p>
            <Link to='/about'>
                <button className="btn btn-primary mt-5 self-center">Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default AboutContact