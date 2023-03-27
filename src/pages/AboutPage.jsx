import Header from '../components/Header'
import headshot from '../img/portfolio_photo.jpg'

const About = () => {
    return (
        <div className=''>
            <Header title='About Me' />
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    <div className="card items-end">
                        <p className='w-2/3 card-body bg-base-200 m-5'>I am currently employed as a front end developer in Cincinnati, OH. I love working with React and I am always working to improve my skills. React is my language of choice for my current projects.</p>
                    </div>
                    <div className="card items-end">
                        <p className='w-2/3 card-body bg-base-200 m-5'>I have also started working with Node.js and Express to better understand full stack development. I am continuing to learn Node and Express, which I would like to combine with my React skills to create more complex and robust full stack applications.</p>
                    </div>
                    <div className="card items-end">
                        <p className='w-2/3 card-body bg-base-200 m-5 mb-20'>Outside of programming, I love doing Brazilian jiu jitsu and anything that gets me outside. I am also a huge sports fan and love to cheer on the Detroit Red Wings and the Arkansas Razorbacks (my alma mater).</p>
                    </div>
                </div>
                <img src={headshot} alt="Adam" className='headshot justify-self-start ml-28 mt-4 max-w-sm rounded-lg shadow-2xl' />
            </div>
        </div>
    )
}

export default About