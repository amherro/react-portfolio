import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='fixed top-0 w-full z-50'>
      <div className="flex justify-around items-center flex-col lg:flex-row flex-wrap static">
        <div className="logo_section mt-10 text-center sm:text-start">
          <Link to="/">
            <h1 className="header-logo">adam<span className='logo-period'>.</span>herro</h1>
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
