import './App.scss'
import NavBar from './Components/NavBar.tsx'
import Home from './Sections/Home.tsx'
import AboutMe from './Sections/AboutMe.tsx'
import WorksAndSkills from './Sections/WorksAndSkills.tsx'
import ContactMe from './Sections/ContactMe.tsx'
import Fotter from './Components/Fotter.tsx'


function App() {
  
  return (
    <div className='App'> 
      <NavBar />
      <Home />
      <AboutMe />
      <WorksAndSkills />
      <ContactMe />
      <Fotter />
    </div>
  )
}

export default App
