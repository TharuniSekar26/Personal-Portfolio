import profile from './assets/profile.jpeg';
import './AboutMe.css';
function AboutMe() {
    return (
        <section className="about">
            <h2 className="about-title">
                <i className="bi bi-person-fill"></i> About <span>Me</span>
            </h2>
            <div className="about-container">
                <div className="about-left">
                    <img src={profile} alt="profile" />
                </div>
                <div className="about-right">
                    <h3>I'm Tharuni</h3>
                    <h4 className='about-role fs-3'>Corporate Trainer</h4>
                    <p>
                        Hi, I'm Tharuni, a passionate Corporate Trainer with experience
                        in delivering impactful training programs that bridge knowledge
                        with real-world applications.
                    </p>

                    <p>
                        I specialize in communication skills, leadership development,
                        and professional growth training. My goal is to empower
                        individuals and teams to perform at their highest potential.
                    </p>

                    <p>
                        I am always excited to connect, collaborate, and create
                        meaningful learning experiences.
                    </p>
                    <div className='detail-container'>
                        <div className='detail-left'>
                            <p className='about-contact'>
                                Phone: <span>+91 8270551824</span>
                            </p>
                            <p className='about-contact'>
                                Email: <span>tharunisekar@gmail.com</span>
                            </p>
                            <p className='about-contact'>
                                Place: <span>Tamilnadu</span>
                            </p>
                        </div>
                        <div className='detail-right'>
                            <button className='btn'>Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe