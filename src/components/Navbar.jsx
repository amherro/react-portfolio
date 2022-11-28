import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="menu_section">
            <div className="navbar">
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0 flex-auto">
                        <li className="pr-5">
                            <Link to='/' className="btn btn-ghost normal-case textxl">Home</Link>
                        </li>
                        <li className="pr-5">
                            <Link to='/projects' className="btn btn-ghost normal-case textxl">Projects</Link>
                        </li>
                        <li className="pr-5">
                            <Link to='/about' className="btn btn-ghost normal-case textxl">About</Link>
                        </li>
                        <li className="pr-5">
                            <Link to='/contact' className="btn btn-ghost normal-case textxl">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar