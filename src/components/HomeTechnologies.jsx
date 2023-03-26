import htmlImg from '../img/html-logo.svg'
import cssImg from '../img/css-logo.svg'
import reactImg from '../img/react-logo.svg'
import jsImg from '../img/javascript-logo.svg'
import gsapImg from '../img/greensock-logo.svg'
import tailwindImg from '../img/tailwindcss-logo.svg'

const HomeTechnologies = () => {
  return (
    // FIGURE OUT SPACING OF CARDS IN THE GRID \\
    <div className="grid grid-cols-2 py-20">
        <div className="tech-title-container self-center">
            <h2 className='technology-header self-center pb-5 text-center text-5xl font-bold'>Technologies</h2>
            <h2 className='skills-title self-center pb-10 text-center text-5xl font-bold'>and Skills</h2>
        </div>
        <div className="grid grid-cols-2 justify-items-center">
            <div className="flex-row items-start justify-center card w-60 bg-zinc-800 rounded-none m-1 mt-2 mb-4">
                <div className="card-title p-3 pl-4 ">HTML</div>
                <div className="image-container pr-5">
                    <img src={htmlImg} alt="HTML5 Logo" className='logo'/>
                </div>
            </div>
            <div className="flex-row items-start justify-center justify-self-start card w-60 bg-zinc-800 rounded-none m-1 mt-2 mb-4">
                <div className="card-title p-3 pl-4">React</div>
                <div className="image-container pr-5">
                    <img src={reactImg} alt="React Logo" className='logo'/>
                </div>
            </div>
            <div className="flex-row items-start justify-center card w-60 bg-zinc-800 rounded-none m-1 mt-2 mb-4">
                <div className="card-title p-3 pl-4">CSS</div>
                <div className="image-container pr-5">
                    <img src={cssImg} alt="CSS3 Logo" className='logo'/>
                </div>
            </div>
            <div className="flex-row items-start justify-center justify-self-start card w-60 bg-zinc-800 rounded-none m-1 mt-2 mb-4">
                <div className="card-title p-3 pl-4">Javascript</div>
                <div className="image-container pr-5">
                    <img src={jsImg} alt="Javascript Logo" className='logo'/>
                </div>
            </div>
            <div className="flex-row items-start justify-center card w-60 bg-zinc-800 rounded-none m-1 mt-2 mb-4">
                <div className="card-title p-3 pl-4">GSAP Animation</div>
                <div className="image-container pr-5">
                    <img src={gsapImg} alt="Greensock Logo" className='logo'/>
                </div>
            </div>
            <div className="flex-row items-start justify-center justify-self-start card w-60 bg-zinc-800 rounded-none m-1 mt-2 mb-4">
                <div className="card-title p-3 pl-4">Tailwind CSS</div>
                <div className="image-container pr-5">
                    <img src={tailwindImg} alt="Tailwind CSS Logo" className='logo'/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default HomeTechnologies