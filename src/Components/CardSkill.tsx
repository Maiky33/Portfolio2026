
import { useState } from 'react'
import { motion } from "framer-motion";
import './styles/cardSkill.scss'


function CardSkill({item,index}:any) {

    const CardItem = item

    const [Move, setMove] = useState(false)

    const MoveMouseImg = () => { 
        setMove(true)
    }
    const MouseLeaveImg = () => {
        setMove(false)
    }
    
  

    return (
        <motion.div 

        initial={{
            opacity: 0,
            y: 60,
            scale: 0.9
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            scale: 1
        }}
        transition={{
            duration: 0.5,
            delay: index * 0.15
        }}
        viewport={{ once: true }}
        
        className='cardSkill'> 
            <div className='container_Image_Buttons'> 

                {!Move?  
                    <img onMouseEnter={MoveMouseImg} src={CardItem.image} alt="" />:
                    <div onMouseLeave={MouseLeaveImg} className='technologies'> 
                        <div className='container_Icons'>   
                            {CardItem?.technologies?.map((item:any,indexImage:number)=>(    
                                <motion.img
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                    scale: 0.9
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: indexImage * 0.15
                                }}
                                viewport={{ once: true }}
                                className='Icons' src={item?.image} alt=" " />
                            ))}
                        </div>
                    </div>
                }

                <div className='container_Buttons'>   
                    <a className="webSite" target="_blank"  rel="noopener noreferrer" href={CardItem.WebSite}>WebSite</a>
                    <a className="repository" target="_blank"  rel="noopener noreferrer" href={CardItem.Repository}>Repository</a>
                </div>
            </div>
        </motion.div>
    )
}

export default CardSkill