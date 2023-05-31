import Header from '../components/Header'
import headshot from '../img/portfolio_photo.jpg'

const About = () => {
    return (
        <div className=''>
            <Header title='About Me' />
            <div className="lg:grid lg:grid-cols-2">
                <img src={headshot} alt="Adam" className='headshot sm:ml-24 m-auto mt-0 max-w-sm rounded-lg shadow-2xl order-2 mb-5' />
                <div className="flex flex-col order-1">         
                    <div className="card lg:items-end items-center">
                        <p className='w-2/3 card-body bg-zinc-800 m-5'>I am currently employed as a front end developer in Cincinnati, OH. I love working with React and I am always working to improve my skills. React is my language of choice for my current projects.</p>
                    </div>
                    <div className="card lg:items-end items-center">
                        <p className='w-2/3 card-body bg-zinc-800 m-5'>I have also started working with Node.js and Express to better understand full stack development. I am continuing to learn Node and Express, which I would like to combine with my React skills to create more complex and robust full stack applications.</p>
                    </div>
                    <div className="card lg:items-end items-center">
                        <p className='w-2/3 card-body bg-zinc-800 m-5 mb-20'>Outside of programming, I love doing Brazilian jiu jitsu and anything that gets me outside. I am also a huge sports fan and love to cheer on the Detroit Red Wings and the Arkansas Razorbacks (my alma mater).</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About