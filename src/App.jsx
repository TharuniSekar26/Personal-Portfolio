import AboutMe from './AboutMe.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import Hero from './Hero.jsx';
import Navbar from './navbar.jsx'
import Projects from './Projects.jsx';
import Skill from './Skill.jsx';
function App(){
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Skill></Skill>
    <Education></Education>
    <Projects></Projects>
    <Experience></Experience>
    <footer style={{textAlign:'center',fontSize:'28px',backgroundColor:'black',color:'white',padding:'20px'}}>Thanks for visiting my page❤️</footer>
    </>
  );
}

export default App;