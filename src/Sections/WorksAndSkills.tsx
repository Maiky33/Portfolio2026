
import { useState } from 'react'
import { motion } from "framer-motion";

import './styles/worksAndSkills.scss'
import CardSkill from "../Components/CardSkill"
import BackgrondPage from "./Images/WorksAndSkills/BackgrondPage.png"
import {DataCardWorks} from "../Data/DataCardsWorks"



function WorksAndSkills() {

    const [filterSelect, setfilterSelect] = useState("All")

    const SelectFilter = (item:string) =>{   
        setfilterSelect(item)
    }

    const filteredCards = filterSelect === "All"? DataCardWorks: 
    DataCardWorks.filter((item) => item.type === filterSelect);

    const filters = ["All", "Frontend", "FullStack", "Landing"];


    return (
        
        <motion.div
            id='Works/Skills'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.7,
                ease: "easeOut"
            }}
            // viewport={{ once: true, amount: 0.2 }}
            
            style={{
                backgroundImage: `url('${BackgrondPage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%'
            }} 
            className='container_works_Skills'> 

            <div className='works_Skills'> 
                <div className='title_filters'>   
                    <h2>My recent <span>works</span></h2> 
                    <div className='container_Buttons'>   
                        {filters.map((filter) => (  
                            <button
                                key={filter}
                                onClick={() => SelectFilter(filter)}
                                className={filterSelect === filter ? "active" : ""}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={filteredCards.length <= 3 ? "minCards" : "cards"}>
                    {   
                        filteredCards.map((item, index)=>( 
                            <CardSkill item={item} index={index}/>
                        ))
                    } 
                </div>
            </div>

        </motion.div>
    )
}

export default WorksAndSkills