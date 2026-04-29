import Header from '../components/Header'
import InfoCard from '../components/InfoCard'

const ContactPage = () => {
    return (
        <div>
            <Header />
            <div className="content-container pt-[125px]">
                <h1>Contact</h1>
                <div className="flex md:flex-row flex-col items-center justify-evenly">
                    <InfoCard title='Phone' data='(616) 802-2197' />
                    <InfoCard title='Email' data='adam.herro@comcast.net' />
                </div>
            </div>
        </div>
    )
}

export default ContactPage