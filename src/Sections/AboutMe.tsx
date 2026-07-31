
import { useState } from 'react'
import { motion } from "framer-motion";

import './Styles/aboutMe.scss'
import AboutImage from "./Images/about/About.png"
import ArrowVector from "./Images/about/arrow.png"
import LigthVector from "./Images/about/lightbulb.png"
import MusicVector from "./Images/about/music.png"



function AboutMe() {

    const [readMore, setReadMore] = useState<boolean>(false);

    const TextAboutMe:string = "Full Stack Developer with over 3 years of experience in developing, maintaining, and optimizing web applications. Skilled in React, JavaScript, TypeScript, Node.js, Express, and MongoDB, with experience building modern user interfaces, REST APIs, and scalable solutions. Recognized for solving technical issues, implementing new features, and collaborating effectively in agile teams. Currently pursuing a degree in Software Analysis and Development (ADSO)."
  
    const maxCharacters:number = 285;

    return (
        <motion.div id='AboutMe'
        initial={{
            opacity: 0,
            filter: "blur(12px)"
        }}
        whileInView={{
            opacity: 1,
            filter: "blur(0px)"
        }}
        transition={{
            duration: 0.9,
        }}
        // viewport={{ once: true, amount: 0.3 }}
        
        >  
            <div className='about'> 
                <div className='container_About'> 
                    <img className='music' src={MusicVector} alt=" " />
                    <img className='ligth' src={LigthVector} alt=" " />
                    <img className='arrow' src={ArrowVector} alt=" " />


                    <div className='containter_Title'>   
                        <h2>About <span>me</span></h2>
                        <p> 
                            {readMore
                            ? TextAboutMe
                            : `${TextAboutMe.slice(0, maxCharacters)}...`}
                            <a className='readMore_ShowMore' onClick={() => setReadMore(!readMore)}>{readMore?" Show less":" Read More"}</a>
                        </p>
                    </div>
                </div>

                <div className='container_Image'> 
                    <img src={AboutImage} alt=" " />
                </div>

            </div>

            <div className='about_Fotter'>   
                <div className='fotter_About'></div>
                <div className='fotter_Image'></div>
            </div>
        </motion.div>
    )
}

export default AboutMe