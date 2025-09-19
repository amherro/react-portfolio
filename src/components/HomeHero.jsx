import { Link } from 'react-router-dom';
import headshot from '../img/photo-home.webp';

const HomeHero = () => {
  return (
    <div className="hero pt-12 pb-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={headshot}
          alt="Adam"
          className="headshot max-w-sm rounded-lg shadow-2xl"
        />
        <div className="w-3/4 sm:w-1/2 pt-4 text-center sm:text-start">
          <h1 className="text-4xl font-bold">Welcome to my portfolio!</h1>
          <p className="py-6 lg:w-3/4">
            Feel free to browse my most recent projects on the Projects page. If
            you would like to get in touch, please use the information on the
            Contact page.
          </p>
          <Link to="/projects">
            <button className="btn btn-primary bg-green-700 border-green-700 hover:bg-green-900 hover:border-green-900 mr-5 mb-4">
              View Projects
            </button>
          </Link>

          <Link to="/contact">
            <button className="btn btn-primary bg-green-700 border-green-700 hover:bg-green-900 hover:border-green-900 px-7 mr-5">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
