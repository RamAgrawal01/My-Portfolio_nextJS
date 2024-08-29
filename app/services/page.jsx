"use client"
import React from 'react';
import { BsArrowDownRight } from "react-icons/bs";
import Link from 'next/link';
import { motion } from 'framer-motion';


const services=[
  {
    num: 1,
    title: 'Frontend',
    description: 'Frontend development focuses on creating the user interface and user experience for websites and web applications. It involves using technologies like HTML, CSS, and JavaScript to build responsive, interactive designs that users interact with directly.',
    href: ''
  },
  {
    num: 2,
    title: 'Backend',
    description: 'Backend development deals with the server-side logic, database interactions, and application functionality that users do not see. It involves working with server-side languages and frameworks to ensure data processing, storage, and security.',
    href: ''
  },
  {
    num: 3,
    title: 'MERN Stack',
    description: 'The MERN Stack is a combination of MongoDB, Express.js, React, and Node.js. This full-stack JavaScript framework is used for developing dynamic, high-performance web applications, handling both frontend and backend development seamlessly.',
    href: ''
  },
  {
    num: 4,
    title: 'Quality Analyst',
    description: 'A Quality Analyst ensures that web applications and software meet high standards of quality and performance. This role involves testing, debugging, and evaluating software to find and resolve issues, ensuring a smooth and reliable user experience.',
    href: ''
  },
  {
    num: 5,
    title: 'Software Development',
    description: 'Software Development involves designing, coding, testing, and maintaining software applications or systems. It encompasses various methodologies and practices to build reliable, efficient, and scalable software solutions for a wide range of needs and industries.',

    href: ''
  },
  {
    num: 5,
    title: 'Chemistry Faculty for JEE',
    description: 'Provides expert instruction and guidance for students preparing for the Joint Entrance Examination (JEE) in Chemistry. This role involves teaching fundamental and advanced concepts, solving complex problems, and preparing students for high-stakes exams with targeted strategies and practice.',

    href: ''
  }
]



const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"},}}
        className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service,index)=>(
            <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-transparent
                group-hover:text-outline-hover transition-all duration-300'>{service.num}</div>
                <Link href={service.href} className='w-[70px] h-[70px] bg-white group-hover:bg-accent
                transition-all duration-500 flex justify-center items-center hover:rotate-45 rounded-full
                '>
                <BsArrowDownRight className='text-primary text-3xl'/>
                </Link>
              </div>

              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent
              transition-all duration-400'>{service.title}</h2>

              <p className='text-white/70'>{service.description}</p>

              <div className='border-b border-white/20 w-full'></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;