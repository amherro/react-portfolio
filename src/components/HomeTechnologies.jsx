import htmlImg from '../img/html-logo.svg';
import cssImg from '../img/css-logo.svg';
import reactImg from '../img/react-logo.svg';
import jsImg from '../img/javascript-logo.svg';
import gsapImg from '../img/greensock-logo.svg';
import tailwindImg from '../img/tailwindcss-logo.svg';
import TechnologyCard from './TechnologyCard';

import { useRef, useEffect } from 'react';

const HomeTechnologies = () => {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);

  // useEffect(() => {
  //   const resetScroll = () => {
  //     const wrapperWidth = wrapperRef.current.offsetWidth;

  //     trackRef.current.style.setProperty(
  //       '--scroll-distance',
  //       `${wrapperWidth}px`,
  //     );
  //   };
  //   resetScroll();
  //   window.addEventListener('resize', resetScroll);

  //   return () => window.removeEventListener('resize', resetScroll);
  // }, []);

  return (
    <section className="home-technologies flex flex-col pt-20 lg:my-20">
      <h2 className="mx-3 text-center lg:text-start xl:pl-[5.2rem] text-3xl md:text-5xl font-bold">
        Technologies and Skills
      </h2>
      <div className="tech-card-grid py-10 pb-20 md:mx-20">
        <TechnologyCard
          techName="React"
          imgSrc={reactImg}
          altText="React Logo"
        />
        <TechnologyCard
          techName="Javascript"
          imgSrc={jsImg}
          altText="Javascript Logo"
        />
        <TechnologyCard techName="CSS3" imgSrc={cssImg} altText="CSS Logo" />
        <TechnologyCard
          techName="HTML5"
          imgSrc={htmlImg}
          altText="HTML5 Logo"
        />
        <TechnologyCard
          techName="Tailwind CSS"
          imgSrc={tailwindImg}
          altText="Tailwind CSS Logo"
        />
        <TechnologyCard
          techName="GSAP Animation"
          imgSrc={gsapImg}
          altText="Greensock Logo"
        />
        {/* <TechnologyCard
          techName="Tailwind CSS"
          imgSrc={tailwindImg}
          altText="Tailwind CSS Logo"
        />
        <TechnologyCard
          techName="Tailwind CSS"
          imgSrc={tailwindImg}
          altText="Tailwind CSS Logo"
        /> */}
      </div>
      {/* <div id="carousel" className="carousel py-10 mb-10">
        <div ref={trackRef} className="track flex">
          <div
            ref={wrapperRef}
            className="card-wrapper flex align-center justify-center"
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
      </div> */}
    </section>
  );
};

export default HomeTechnologies;
