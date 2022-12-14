import { Link } from "react-router-dom"

const HomeHero = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/arch" alt='Adam' className="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-2/4'>
                    <h1 className="text-4xl font-bold">Welcome to my portfolio!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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