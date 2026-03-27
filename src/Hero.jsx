import './Hero.css'
import profile from './assets/profile.jpeg';

function Hero() {
  return (
    <section id="home" className='hero'>
        <div className='hero-left'>
            <div>
                <h1>
                    Heyy There, <br/>
                    I'm Tharuni Sekar
                </h1>
                <h1>
                    I am a <span className='role'>Corporate Trainer</span>
                </h1>

                <button className='btn'><a href="#about">About</a></button>
                <div className='social-icons'>
                    <i className="bi bi-linkedin icon fs-3"></i>
                    <i className="bi bi-youtube icon fs-3"></i>
                    <i className="bi bi-github icon fs-3"></i>
                    <i className="bi bi-instagram icon fs-3"></i>
                    <i className="bi bi-envelope icon fs-3"></i>
                </div>
            </div>
        </div>
        <div className='hero-right'>
            <img src={profile} alt = 'profile'></img>
        </div>
    </section>
  )
}

export default Hero