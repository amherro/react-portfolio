import AboutContact from '../components/AboutContact'
import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import HomeProjects from '../components/HomeProjects'
import HomeTechnologies from '../components/HomeTechnologies'
const Home = () => {
    return (
        <div>
            <Header />
            <div className="content-container pt-[125px]">
                <HomeHero />
                <HomeTechnologies />
                <HomeProjects />
                <AboutContact />
            </div>
            {/* Footer */}
        </div>
    )
}

export default Home