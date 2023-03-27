import { Link } from "react-router-dom"
import headshot from '../img/portfolio_photo.jpg'

const HomeHero = () => {
    return (
        <div className="hero pt-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={headshot} alt='Adam' className="headshot max-w-sm rounded-lg shadow-2xl" />
                <div className='w-2/4'>
                    <h1 className="text-4xl font-bold">Welcome to my portfolio!</h1>
                    <p className="py-6">Feel free to browse my most recent projects on the projects page. If you would like to get in touch, please use the information on the Contact page.</p>
                    <Link to='/projects'>
                        <button className="btn btn-primary mr-5">
                            View Projects
                        </button>
                    </Link>

                    <Link to='/contact'>
                        <button className="btn bg-[#f4f4f4] text-black border-primary border-4">
                            Contact Me
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeHero