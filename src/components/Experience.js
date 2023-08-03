import React from 'react'
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Details = ({position,company,companyLink,time,address,work})=>{
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between'>
        <div>
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; <a href={companyLink}
            target='_blank'
            className='text-primary capitalize'
            >@{company}</a> </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time}|{address}
            </span>
            <p className='font-medium'>
                {work}
            </p>
        </div>
    </li>
}

const Experience = () => {
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
            Experience</h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>

    <motion.div 
    style={{scaleY:scrollYProgress}}
    className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'/>
        
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                    position='Organizing Comittee' 
                    company="Hackstory'23"
                    time="2023-Present" address="VIT Vellore"
                    work="Part of the Organizing Committee at VIT's one of the biggest student-run hackathon. Managed more
                    than 1000 students across the duration of the hack." 
                    />

                    <Details
                    position='Finance and Outreach Head' 
                    company="AI ML Club"
                    time="2022-Present" address="VIT Vellore"
                    work="Head of Finance and Outreach department at VIT’s one of the biggest machine learning club. 
                    As a part of the web development domain Successfully developed the portfolio website for the club" 
                    />
                    
                    <Details
                    position='Core Committee' 
                    company="ACM VIT"
                    time="2022-Present" address="VIT Vellore"
                    work="Part of Web Development team, ideated and developed open-source projects. 
                    Developed and implemented a dynamic and user-friendly event website, integrating interactive features and
                    ensuring seamless functionality." 
                    />

                    <Details
                    position='Core Committee' 
                    company="IEEE SSIT"
                    time="2022-Present" address="VIT Vellore"
                    work="Part of Web Development Team, contributed to the creation of visually appealing and user-friendly
                    websites to enhance the online presence of the organization.
                     Participated as the Club Representative at VIT’s flagship hackathon, demonstrating problem-solving skills,
                    innovative thinking, and effective communication within a collaborative team setting." 
                    />

                </ul>
            </div>
    </div>
  )
}

export default Experience