import githubLogo from '../img/github-logo.png'

const Footer = () => {
  return (
    <footer className='bg-base-200'>
        <div className="footer-container flex p-10 justify-center items-center">
            <a href="https://github.com/amherro">
                <img src={githubLogo} alt="Github Logo" className='github-logo' />
            </a>
            <p className='pl-5 self-center'>Copyright &copy; 2023 amherro</p>
        </div>
    </footer>
  )
}

export default Footer