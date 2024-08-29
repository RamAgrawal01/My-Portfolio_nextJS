import { animate } from 'framer-motion';
import React from 'react';
import { motion } from 'framer-motion';

//variants
const stairAnimation = {
    initial:{
        top : "0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%","0%"],
    },
};

//calculatethe reverse index for staggered delay
const reverseIndex = (index)=>{
    const totalSteps = 6;
    return totalSteps-index-1;
}

const Stairs = () => {
    return(
        <>
        {/* Rendring motion divs  , each div will have same animation
        defined by the stair animation object , the delay for each div is calculate
        based on its reversed index , creating a staggered effect with decreasing delay for each 
        subsequent step*/}
        {[...Array(6)].map((_,index)=>(
            <motion.div key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration:0.4,ease:'easeInOut',delay:reverseIndex(index)*0.1,}}
            className="h-full w-full bg-accent relative">
            
            </motion.div>
        ))}
        </>
    )
}
export default Stairs;