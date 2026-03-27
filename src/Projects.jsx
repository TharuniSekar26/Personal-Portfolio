import './Projects.css';
import portfolio from './assets/portfolio.jpg'
function Projects() {
    return (
        <section id="projects" className='projects'>
            <h2 className='project-title'>
                <i className='bi bi-laptop'></i>  My <span>Projects</span>
            </h2>
            <div className='project-container'>
                <div className='project-card'>
                    <div className='project-left'>
                        <img src={portfolio} alt='portfolio' />
                    </div>
                    <div className='project-right'>
                        <h4>PERSONAL PORTFOLIO</h4>
                        <h3>Tech : React, Bootstrap</h3>
                    </div>
                    <div className='project-last'>
                        <button className='btn'>Code</button>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-left'>
                        <img src={portfolio} alt='portfolio' />
                    </div>
                    <div className='project-right'>
                        <h4>SHOPPING CART</h4>
                        <h3>Tech : SPRING BOOT</h3>
                    </div>
                    <div className='project-last'>
                        <button className='btn'>Code</button>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-left'>
                        <img src={portfolio} alt='portfolio' />
                    </div>
                    <div className='project-right'>
                        <h4>FACE MASK DETECTION</h4>
                        <h3>Tech : OpenCV, Machine Learning</h3>
                    </div>
                    <div className='project-last'>
                        <button className='btn'>Code</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects