import htmlImg from '../img/html-logo.svg';
import cssImg from '../img/css-logo.svg';
import reactImg from '../img/react-logo.svg';
import jsImg from '../img/javascript-logo.svg';
import gsapImg from '../img/greensock-logo.svg';
import tailwindImg from '../img/tailwindcss-logo.svg';
import TechnologyCard from './TechnologyCard';

const HomeTechnologies = () => {
  return (
    <div className="grid md:grid-cols-2 py-10">
      <div className="tech-title-container self-center">
        <h2 className="technology-header self-center pb-5 pl-3 text-center text-5xl font-bold">
          Technologies
        </h2>
        <h2 className="skills-title self-center pb-10 pl-3 text-center text-5xl font-bold">
          and Skills
        </h2>
      </div>
      <div className="grid justify-center md:grid-cols-2">
        <TechnologyCard techName="HTML" imgSrc={htmlImg} altText="HTML5 Logo" />
        <TechnologyCard techName="CSS" imgSrc={cssImg} altText="CSS Logo" />
        <TechnologyCard
          techName="Javascript"
          imgSrc={jsImg}
          altText="Javascript Logo"
        />
        <TechnologyCard
          techName="React"
          imgSrc={reactImg}
          altText="React Logo"
        />
        <TechnologyCard
          techName="GSAP Animation"
          imgSrc={gsapImg}
          altText="Greensock Logo"
        />
        <TechnologyCard
          techName="Tailwind CSS"
          imgSrc={tailwindImg}
          altText="Tailwind CSS Logo"
        />
      </div>
    </div>
  );
};

export default HomeTechnologies;
