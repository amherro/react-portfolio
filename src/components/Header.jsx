import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = ({ title }) => {
  return (
    <header>
      <div className="header-container flex flex-col lg:flex-row flex-wrap">
        <div className="logo_section p-5 text-center sm:text-start">
          <Link to="/">
            <h1 className="pb-3 text-5xl font-bold">Adam Herro</h1>
            <h2 className="text-4xl font-bold">Front End Developer</h2>
          </Link>
        </div>
        <Navbar />
      </div>

      {title === null ? (
        console.log('first')
      ) : (
        <div className="flex justify-center py-20 pb-16 text-4xl font-bold">
          <h1>{title}</h1>
        </div>
      )}
    </header>
  );
};

export default Header;
