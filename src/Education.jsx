import './Education.css'
import krct from './assets/krct.jpg'
function Education() {
  return (
     <section className='education'>
        <h2 className='education-title'>
            <i className="bi bi-mortarboard-fill"> </i><span>Education</span>
        </h2>
        <div className='education-container'>
            <div className='education-card'>
                <div className='education-left'>
                    <img src={krct} alt='college'/>
                </div>
                <div className='education-right'>
                    <h4>BACHELOR OF TECHNOLOGY - ARTIFICIAL INTELLIGENCE AND DATA SCIENCE</h4>
                    <h3>K RAMAKRISHNAN COLLEGE OF TECHNOLOGY</h3>
                    <h2>2020-2024 | 8.5 CGPA</h2>
                </div>
            </div>
            <div className='education-card'>
                <div className='education-left'>
                    <img src={krct} alt='college'/>
                </div>
                <div className='education-right'>
                    <h4>HSC | BIO-MATHS</h4>
                    <h3>Holy Cross Higher Secondary School</h3>
                    <h2>2018-2020 | 85%</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education