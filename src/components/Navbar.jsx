import { Link } from "react-router-dom"
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

const Navbar = () => {
    let screenWidth = window.innerWidth

    return (
        <div className="menu_section flex flex-col self-center pt-8 pb-0">
            {screenWidth <= 500 ? (
                <div className="dropdown flex flex-col">
                    <label tabIndex={0} className="btn px-20 m-auto">
                        <Icon path={mdiMenu} size={1.5} />
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu mt-14 shadow bg-base-100 rounded-box w-60 flex-auto justify-self-center">
                        <li className="pr-5">
                            <Link to='/' className="nav-buttons btn btn-ghost normal-case">Home</Link>
                        </li>
                        <li className="pr-5">
                            <Link to='/projects' className="nav-buttons btn btn-ghost normal-case">Projects</Link>
                        </li>
                        <li className="pr-5">
                            <Link to='/about' className="nav-buttons btn btn-ghost normal-case">About</Link>
                        </li>
                        <li className="pr-5">
                            <Link to='/contact' className="nav-buttons btn btn-ghost normal-case">Contact</Link>
                        </li>
                    </ul>
                </div>
            ) : (
<div className="navbar">
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0 flex-auto">
                        <li className="pr-5">
                            <Link to='/' className="nav-buttons btn btn-ghost normal-case">Home</Link>
                        </li>
                        <li className="pr-5">
                            <Link to='/projects' className="nav-buttons btn btn-ghost normal-case">Projects</Link>
                        </li>
                        <li className="pr-5">
                            <Link to='/about' className="nav-buttons btn btn-ghost normal-case">About</Link>
                        </li>
                        <li className="pr-5">
                            <Link to='/contact' className="nav-buttons btn btn-ghost normal-case">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            )}
        </div>
    )
}

export default Navbar