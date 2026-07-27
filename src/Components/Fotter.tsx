
import './styles/fotter.scss'
import { FiHome } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";

import { SlSocialFacebook } from "react-icons/sl";
import { SiInstagram } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { PiYoutubeLogo } from "react-icons/pi";
import {motion} from "framer-motion"

import {scrollToSection} from "../utils/scrollToSection"


function Fotter() {

  return (
    <motion.div 
        initial={{
        opacity: 0,
        scale: 0.8
    }}
    whileInView={{
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 0.7
    }}
    // viewport={{ once: true }}

    className='fotter'> 
      <div className='container_Mini_Nav'> 
        <div className='mini_Nav'>   
            <div onClick={()=> scrollToSection("Home")} className='home'>
                <FiHome/><p>Home</p>
            </div>
            <div onClick={()=> scrollToSection("Contact")}  className='contact'>
                <FiPhone/><p>Contact</p>
            </div>
            <div onClick={()=> scrollToSection("AboutMe")} className='aboutMe'>
                <LuUser/><p>About me</p>
            </div>
        </div>
      </div>
      <div className='icons_Social_Privacy'> 
        <div className='icons_Social'>   
            <a href='https://www.facebook.com/maicoljessid.barreragonzales?locale=es_LA' target='_blank'>   
                <SlSocialFacebook />
            </a>
            <a href='https://www.instagram.com/soymaiky_7/' target='_blank'>   
                <SiInstagram/>
            </a>
            <a href='https://x.com/MaicolB62723424' target='_blank'>   
                <RiTwitterXFill/>
            </a>
            <a href='https://www.youtube.com/@SoyMaiky_7' target='_blank'>   
                <PiYoutubeLogo/>
            </a>
        </div>
        <p className='privacy'>Terms of Service - Privacy Policy</p>
      </div>
    </motion.div>
  )
}

export default Fotter