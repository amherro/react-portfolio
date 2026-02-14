import htmlImg from '../img/html-logo.svg';
import cssImg from '../img/css-logo.svg';
import reactImg from '../img/react-logo.svg';
import jsImg from '../img/javascript-logo.svg';
import gsapImg from '../img/greensock-logo.svg';
import tailwindImg from '../img/tailwindcss-logo.svg';
import TechnologyCard from './TechnologyCard';
import { useEffect } from 'react';

const HomeTechnologies = () => {
  // Prevent user scroll on infinite scrolling container
  useEffect(() => {
    document.getElementById('carousel').addEventListener('wheel', function (e) {
      e.preventDefault();
    });
  }, []);

  return (
    <div className="flex flex-col pt-10 lg:py-20">
      <h2 className="mb-10 mx-3 pl-3 text-center text-4xl md:text-5xl font-bold">
        Technologies and Skills
      </h2>
      <div id="carousel" className="flex carousel bg-zinc-800 py-10 mb-10">
        <div className="card-wrapper flex align-center justify-center">
          <TechnologyCard
            techName="HTML"
            imgSrc={htmlImg}
            altText="HTML5 Logo"
          />
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
        <div
          className="card-wrapper flex align-center justify-center"
          aria-hidden
        >
          <TechnologyCard
            techName="HTML"
            imgSrc={htmlImg}
            altText="HTML5 Logo"
          />
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
    </div>
  );
};

export default HomeTechnologies;
