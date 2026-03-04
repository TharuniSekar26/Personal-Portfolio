import './Skills.css';
function Skill() {
  return (
    <section className='skill'>
        <h2 className='skills-title'>
            <i className='bi bi-laptop'></i> Skills & <span>Technology</span>
        </h2>
        <div className='skills-container'>
            <div className='skill-card'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                <span>Python</span>
            </div>
            <div className='skill-card'>
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' alt="Python" />
                <span>Java</span>
            </div>
            <div className='skill-card'>
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' alt="Python" />
                <span>MySQL</span>
            </div>
            <div className='skill-card'>
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt="Python" />
                <span>JavaScript</span>
            </div>
            <div className='skill-card'>
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'alt="Python" />
                <span>HTML5</span>
            </div>
            <div className='skill-card'>
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' alt="Python" />
                <span>CSS</span>
            </div>
            <div className='skill-card'>
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt="Python" />
                <span>React</span>
            </div>
            <div className='skill-card'>
                <img src='https://www.vectorlogo.zone/logos/github/github-tile.svg' alt="Python" />
                <span>GitHub</span>
            </div>
            <div className='skill-card'>
                <img src='https://cdn-icons-png.flaticon.com/512/1055/1055644.png'alt="Python" />
                <span>Data Structures</span>
            </div>
            <div className='skill-card'>
                <img src='https://www.vectorlogo.zone/logos/microsoft_office/microsoft_office-icon.svg' alt="Python" />
                <span>MS Office</span>
            </div>
            <div className='skill-card'>
                <img src='https://cdn-icons-png.flaticon.com/512/3254/3254050.png' alt="Python" />
                <span>Problem Solving</span>
            </div>
            <div className='skill-card'>
                <img src='https://cdn-icons-png.flaticon.com/512/12104/12104975.png' alt="Python" />
                <span>LLM & RAG</span>
            </div>
        </div>
    </section>
  )
}

export default Skill