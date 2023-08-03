import React from 'react'
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({type,time,place,info})=>{
    const ref = useRef(null);
   return <li ref ={ref}  className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between'>
        <LiIcon reference ={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:'spring'}}>
        <div>
            <h3 className='capitalize font-bold text-2xl'>{type} </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time}|{place}
            </span>
            <p className='font-medium'>
                {info}
            </p>
        </div>
        </motion.div>
    </li>
}

const Education = () => {
    const ref =useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset:["start end","center start"]
        }
    );
  return (
    <div className='my-64'>

        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Education</h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>

    <motion.div 
    style={{scaleY:scrollYProgress}}
    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
        
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                    type="Senior Secondary Education"
                    time="2018-2020" place="Bhawan Vidyalaya Pankhkula"
                    info="Completed my senior secondary education with PCM in CBSE board exams."
                    />

                    <Details
                    type="Bachelor of Technology"
                    time="2021-Present" place="Vellore Institute of Technology"
                    info="Relevant courses include Data Structures and Algorithm, Computer Systems Engineering, 
                    Object Oriented Programming, Database Management Systems, Operating Systems and Artificial Intelligence."
                    />
                    
                    <Details
                    type="Online Coursework"
                    time="2020-Present" place="Coursera, Udemy"
                    info="Relevant courses include Full Stack Web Development, Machine Learning and Deep Learning"/>

                </ul>
            </div>
    </div>
  )
}

export default Education