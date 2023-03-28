import githubLogo from '../img/github-logo.png'
import Icon from '@mdi/react';
import { mdiOpenInApp } from '@mdi/js';

const Project = ({id, source, title, description, liveUrl, githubUrl}) => {
  return (
    <div>
        <div className="image-overlay image-size card relative m-2" data-overlay-title={title}>
            <img src={source} alt={title} className='project-screenshot image-size w-full align-top relative'/>
            <label htmlFor={`project-modal-${id}`} className='open-modal-button card-action btn btn-primary btn-sm ml-5 mr-5'>
                Open
                <Icon path={mdiOpenInApp} size={1} className='ml-2' />
            </label>
        </div>

        {/* ********* Modal ********* */}
        <input type="checkbox" id={`project-modal-${id}`} className="modal-toggle" />
        <div className="modal">
            <div className="modal-box">
                <label htmlFor={`project-modal-${id}`} className="btn btn-sm btn-circle hover:bg-red-500 hover:text-white absolute right-2 top-2">✕</label>
                <h1 className='text-center text-3xl font-bold mb-2'>{title}</h1>
                <a href={liveUrl}>
                    <img src={source} alt={title} className='w-3/4 self-center ml-auto mr-auto m-4' />
                </a>
                <p className='text-center'>{description}</p>
                <div className="flex justify-center mt-4">
                    <a href={liveUrl} className='btn btn-primary m-2 ml-0'>Demo</a>
                    <a href={githubUrl} className='btn btn-primary m-2'>
                        GitHub
                        <img src={githubLogo} alt="GitHub Logo" className="github-logo-btn" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project