// import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    return (
        <div className="menu_section flex flex-col self-center mt-10 pb-0">
             {/* Hamburger menu on mobile */}
            {isMobile ? (
                <div className="dropdown flex flex-col">
                    <label tabIndex={0} className="btn bg-zinc-800 border-b-zinc-800 px-20 m-auto">
                        <Icon path={mdiMenu} size={1.5} />
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu mt-14 shadow bg-zinc-800 rounded-box w-60 flex-auto justify-self-center">
                        <li className="pr-5">
                            <Link to='/' className="nav-buttons normal-case">Home</Link>
                        </li>
                        <li className="pr-5">
                            <Link to='/projects' className="nav-buttons normal-case">Projects</Link>
                        </li>
                        <li className="pr-5">
                            <Link to='/about' className="nav-buttons normal-case">About</Link>
                        </li>
                        <li className="pr-5">
                            <Link to='/contact' className="nav-buttons normal-case">Contact</Link>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="navbar">
                    <div className="flex-none">
                        <ul className="menu menu-horizontal p-0 flex-auto">
                            <li className="pr-5">
                                <Link to='/' className="nav-buttons normal-case">Home</Link>
                            </li>
                            <li className="pr-5">
                                <Link to='/projects' className="nav-buttons normal-case">Projects</Link>
                            </li>
                            <li className="pr-5">
                                <Link to='/about' className="nav-buttons normal-case">About</Link>
                            </li>
                            <li className="pr-5">
                                <Link to='/contact' className="cta nav-buttons normal-case">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar