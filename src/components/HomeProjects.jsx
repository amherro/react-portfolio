import HomeProjectCard from "./HomeProjectCard";
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
      <div className="home-projects-grid">
        <HomeProjectCard title="Hockey Store" description="A React, Express, and Stripe hockey store." tags={["React", "Express", "Tailwind"]} />
        <HomeProjectCard title="Vaudify" description="Vaudify is a web tool that extracts audio from video files and downloads them as MP3s" tags={["Astro", "React", "Express", "FFmpeg", "Tailwind"]} />
        <HomeProjectCard title="Ad Builder" description="An internal tool for my current team to develop advertisements with a user interface and AI capabilities." tags={["React", "Zustand", "Tailwind", "Claude"]} />
      </div>

    </section>
  );
};

export default HomeProjects;
