import { Link } from 'react-router-dom';
import headshot from '../img/headshot-transparent-2026.webp';

const HomeHero = () => {
  return (
    <section className="hero pt-12 md:pt-16 pb-10">
      <div className="hero-content flex flex-row flex-wrap lg:flex-nowrap">
        <div className="flex flex-col items-center pb-7 text-center lg:text-start lg:items-start">
          <p className='job-title-tag pb-5 justify-center lg:justify-normal'>Front End Developer</p>
          <h1 className="hero-header text-5xl lg:text-8xl font-bold">Adam<span className='last-name'>Herro</span></h1>
          <p className="hero-info py-6 w-1/2 md:w-1/2">
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
        <div className="img-border-1 min-w-[40%] flex justify-center">
          <img
            src={headshot}
            alt="Adam"
            className="headshot w-[300px] xl:w-[400px] min-w-[300px]"

          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
