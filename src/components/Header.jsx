import Navbar from "./Navbar"

const Header = ({ title }) => {
    return (
        <header>
            <div className="header-container">
                <div className="logo_section p-5">
                    <h1 className="text-4xl pb-3">Adam Herro</h1>
                    <h2 className="text-2xl">Full Stack Developer</h2>
                </div>
                <Navbar />
            </div>
            <div className="flex justify-center py-20 text-5xl font-bold">
                <h1>{title}</h1>
            </div>
        </header>
    )
}

export default Header