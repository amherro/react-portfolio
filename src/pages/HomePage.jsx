import AboutContact from '../components/AboutContact'
import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import HomeProjects from '../components/HomeProjects'
import HomeTechnologies from '../components/HomeTechnologies'
const Home = () => {
    return (
        <div>
            <Header title={null} />
            <HomeHero />
            <HomeTechnologies />
            <HomeProjects />
            <AboutContact />
            {/* Footer */}
        </div>
    )
}

export default Home