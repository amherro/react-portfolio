import htmlImg from '../img/html-logo.svg'
import cssImg from '../img/css-logo.svg'
import reactImg from '../img/react-logo.svg'
import jsImg from '../img/javascript-logo.svg'
import gsapImg from '../img/greensock-logo.svg'
import tailwindImg from '../img/tailwindcss-logo.svg'

const HomeTechnologies = () => {
  return (
    // FIGURE OUT SPACING OF CARDS IN THE GRID \\
    <div className="py-20">
        <h1 className='technology-header pb-10 text-center text-3xl font-bold'>Technologies and Skills</h1>
        <div className="grid grid-cols-2 justify-items-center">
            <div className="flex-row items-start justify-center justify-self-end card w-60 bg-zinc-800 rounded-none m-10 mb-4">
                <div className="card-title p-3 pl-4 ">HTML</div>
                <div className="image-container pr-5">
                    <img src={htmlImg} alt="HTML5 Logo" className='logo'/>
                </div>
            </div>
            <div className="flex-row items-start justify-center justify-self-start card w-60 bg-zinc-800 rounded-none m-10 mb-4">
                <div className="card-title p-3 pl-4">React</div>
                <div className="image-container pr-5">
                    <img src={reactImg} alt="React Logo" className='logo'/>
                </div>
            </div>
            <div className="flex-row items-start justify-center justify-self-end card w-60 bg-zinc-800 rounded-none m-10 mb-4">
                <div className="card-title p-3 pl-4">CSS</div>
                <div className="image-container pr-5">
                    <img src={cssImg} alt="CSS3 Logo" className='logo'/>
                </div>
            </div>
            <div className="flex-row items-start justify-center justify-self-start card w-60 bg-zinc-800 rounded-none m-10 mb-4">
                <div className="card-title p-3 pl-4">Javascript</div>
                <div className="image-container pr-5">
                    <img src={jsImg} alt="Javascript Logo" className='logo'/>
                </div>
            </div>
            <div className="flex-row items-start justify-center justify-self-end card w-60 bg-zinc-800 rounded-none m-10 mb-4">
                <div className="card-title p-3 pl-4">GSAP Animation</div>
                <div className="image-container pr-5">
                    <img src={gsapImg} alt="Greensock Logo" className='logo'/>
                </div>
            </div>
            <div className="flex-row items-start justify-center justify-self-start card w-60 bg-zinc-800 rounded-none m-10 mb-4">
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