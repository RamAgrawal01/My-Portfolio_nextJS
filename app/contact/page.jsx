"use client"

import React from 'react';
import {Button} from "../../components/ui/button";
import {Input} from "../../components/ui/input";
import { Textarea } from '@/components/ui/textarea';

import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger
  ,SelectValue
 } from '@/components/ui/select';

 import { FaPhoneAlt,FaEnvelope,FaMapMarkedAlt } from 'react-icons/fa';
 import { motion } from 'framer-motion';
 const info = [
  {
    icon : <FaPhoneAlt/>,
    title : "Contact",
    description: "+91 9549808067",
  },
  {
    icon : <FaEnvelope/>,
    title : "Email",
    description: "bansalram7847@gmail.com",
  },
  {
    icon : <FaMapMarkedAlt/>,
    title : "Address",
    description: "173,pratap Nagar mayur vihar phase 1 new delhi 110091",
  },
 ]



 const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.3, duration: 0.3, ease: "easeIn" },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-1 mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => (
                <li key={index} className='flex items-center gap-6'>
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/70'>{item.title}</p>
                    <h3 className='text-xl'>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* form */}
          <div className='xl:h-[53%] order-2 xl:order-2'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let's work together</h3>
              <p className='text-white/60'>
              I'm excited to collaborate on your next project! Whether you have a new idea or need assistance with an existing one, feel free to reach out. Let's discuss how we can bring your vision to life with innovative solutions and effective strategies.
              </p>
              {/* input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type="firstName" placeholder="Firstname" />
                <Input type="lastName" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Contact Number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="front">Fronthend</SelectItem>
                    <SelectItem value="back">Backend</SelectItem>
                    <SelectItem value="mern">MERN STACK</SelectItem>
                    <SelectItem value="sde">Software Development</SelectItem>
                    <SelectItem value="sqa">Quality Analyst</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Text area */}
              <Textarea className="h-[200px]" placeholder="Type your message here" />
              {/* button */}
              <Button size="md" className="max-w-40">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;