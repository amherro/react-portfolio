import React from 'react'

const Navbar = () => {
    return (
        <div className="menu_section">
            <div className="navbar">
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0 flex-auto">
                        <li className="pr-5">
                            <a className="btn btn-ghost normal-case textxl">Home</a>
                        </li>
                        <li className="pr-5">
                            <a href='#' className="btn btn-ghost normal-case textxl">Projects</a>
                        </li>
                        <li className="pr-5">
                            <a href='#' className="btn btn-ghost normal-case textxl">About</a>
                        </li>
                        <li className="pr-5">
                            <a href='#' className="btn btn-ghost normal-case textxl">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar