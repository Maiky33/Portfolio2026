
import './styles/navBar.scss'
import {scrollToSection} from "../utils/scrollToSection"

function NavBar() {

  const reloadPage = () => {
    window.location.reload();
  };
  

  return (
    <div className='navBar_Component'> 
      <h1 onClick={reloadPage} className='title'>My portfolio</h1>
      <div className='container_Selectors'> 
        <p onClick={()=>scrollToSection("AboutMe")}>About me</p>
        <p onClick={()=>scrollToSection("Works/Skills")}>Works/Skills</p>
        <p onClick={()=>scrollToSection("Contact")}>Contact</p>
      </div>
    </div>
  )
}

export default NavBar