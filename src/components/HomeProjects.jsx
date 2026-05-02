import { Link } from 'react-router-dom';
import githubLogo from '../img/github-logo.png';
const HomeProjects = () => {
  return (
    <section className="flex flex-col mt-10 mb-10 lg:mb-[8rem]">
      <div className="flex justify-between">
        <h2 className="pl-[5.2rem] pb-20 text-3xl md:text-5xl font-bold">
          My Projects
        </h2>
        <a href="https://github.com/amherro">
          <button className="github-home md:mr-[7.8rem] flex w-52 md:w-[5.9rem] justify-center items-center">
            GitHub →
            {/* <img
              src={githubLogo}
              alt="GitHub Logo"
              className="github-logo-btn"
            /> */}
          </button>
        </a>
      </div>
      <div className="grid">
        <div className="right-section flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold w-4/5">
            Please visit the Projects page or my GitHub to see what I have been
            working on.
          </h3>
          <div className="button-section flex flex-col md:flex-row md:w-1/2">
            <Link to="/projects">
              <button className="btn btn-primary bg-green-700 border-green-700 hover:bg-green-900 hover:border-green-900 w-52 md:w-32 mt-5 md:mr-5">
                Projects
              </button>
            </Link>

          </div>
        </div>
      </div>

    </section>
  );
};

export default HomeProjects;
