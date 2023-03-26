import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="menu_section">
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
        </div>
    )
}

export default Navbar