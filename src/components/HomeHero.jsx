import { Link } from 'react-router-dom';
import headshot from '../img/home-hero.webp';

const HomeHero = () => {
  return (
    <div className="hero pt-12 md:pt-16 pb-10">
      <div className="hero-content flex flex-row flex-wrap md:flex-nowrap">
        <div className="w-3/4 sm:w-1/2 pb-7 text-center sm:text-start">
          <p className='job-title-tag pb-5 justify-center sm:justify-normal'>Front End Developer</p>
          <h1 className="hero-header text-5xl lg:text-8xl font-bold">Adam<span className='last-name'>Herro</span></h1>
          <p className="hero-info py-6 lg:w-3/4">
            Feel free to browse my most recent projects on the Projects page. If
            you would like to get in touch, please use the information on the
            Contact page.
          </p>
          <div className="flex flex-col lg:flex-row">
            <Link to="/projects">
              <button className="hero-projects-button lg:mr-5 mb-4">
                View Projects
              </button>
            </Link>

            <Link to="/contact">
              <button className="hero-contact-button px-7 lg:mr-5">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <img
          src={headshot}
          alt="Adam"
          className="headshot w-[300px] xl:w-[400px] shadow-2xl"
        />
      </div>
    </div>
  );
};

export default HomeHero;
