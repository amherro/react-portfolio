import { Link } from 'react-router-dom';

const AboutContact = () => {
  return (
    <section className="about-contact-home">
      <div className="about-home-section">
        <h3 className="about-title">Who I am</h3>
        <p className="about-text">I'm a front end developer passionate about turning ideas into polished, functional web experiences. I care deeply about code quality, performance, and the small details that make a product feel right.</p>
        <Link to="/about">
          <button className="home-about-button">
            About me →
          </button>
        </Link>
      </div>
      <div className="contact-home-section">
        <h3 className="about-title">Let's Work Together</h3>
        <p className="contact-text">Interested in collaborating or have a project in mind? I'm always open to discussing new opportunities and ideas.</p>
        <Link to="/contact">
          <button className="home-contact-button">
            Get in touch →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutContact;
