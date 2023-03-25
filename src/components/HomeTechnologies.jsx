import htmlImg from '../img/html-logo.svg'

const HomeTechnologies = () => {
  return (
    <div className="py-20">
        <h1 className='technology-header pb-10 text-center text-3xl font-bold'>Technologies and Skills</h1>
        <div className="grid grid-cols-2 justify-items-center">
            <div className="flex-row items-start card w-96 bg-zinc-800 rounded-none mb-4">
                <div className="card-title p-3 pl-4 ">HTML</div>
                <div className="image-container pr-5">
                    <img src={htmlImg} alt="HTML5 Logo" className='logo'/>
                </div>
            </div>
            <div className="flew-row items-start justify-between card w-96 bg-zinc-800 rounded-none mb-4">
                <div className="card-title p-3 pl-4">React</div>
            </div>
            <div className="card w-96 bg-zinc-800 rounded-none mb-4">
                <div className="card-title p-3 pl-4">CSS</div>
            </div>
            <div className="card w-96 bg-zinc-800 rounded-none mb-4">
                <div className="card-title p-3 pl-4">Javascript</div>
            </div>
            <div className="card w-96 bg-zinc-800 rounded-none mb-4">
                <div className="card-title p-3 pl-4">GSAP Animation</div>
            </div>
            <div className="card w-96 bg-zinc-800 rounded-none mb-4">
                <div className="card-title p-3 pl-4">Tailwind CSS</div>
            </div>
            
        </div>
    </div>
  )
}

export default HomeTechnologies