
import './styles/home.scss'
import HomeImage from "./Images/home/HomeImage.png"
import ArrowVector from "./Images/home/ArrowVector.png"
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import {scrollToSection} from "../utils/scrollToSection"

import { BsArrowDown } from "react-icons/bs";

function Home() {
  
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv-maicol-barrera.pdf";
    link.download = "Maicol_Barrera_CV.pdf";
    link.click();
  };

  return (
    <motion.div className='home' id='Home'
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      ease: "easeOut"
    }}
    // viewport={{ once: true, amount: 0.3 }}
    > 
      <div className='container_Image_Title_Buttons'> 
        
        <img src={ArrowVector} alt=" " />

        <div className='containter_Title_Buttons'>   
          <h2>FULLSTACK <span>DEVELOPER</span></h2>
          <div className='container_Buttons'>   
            <button onClick={()=>scrollToSection("Contact")} className='hire_Me'>Hire me</button>
            <button onClick={downloadCV} className='download_CV'>Download CV <MdOutlineFileDownload/></button>
          </div>
        </div>
      </div>

      <div className='container_Image_Row'> 
        <img src={HomeImage} alt=" " />
        <button onClick={()=>scrollToSection("AboutMe")}><BsArrowDown/></button>
      </div>
    </motion.div>
  )
}

export default Home