import Navbar from "./Navbar"

const Header = () => {
    return (
        <header>
            <div className="logo_section p-5">
                <h1 className="text-4xl pb-3">Adam Herro</h1>
                <h2 className="text-2xl">Full Stack Developer</h2>
            </div>
            <Navbar />
        </header>
    )
}

export default Header