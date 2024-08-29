"use client";
import React from "react";
import { FaHtml5 ,  FaCss3Alt , FaJs,FaReact,FaNode ,FaJava , FaWordpress} from "react-icons/fa";
import { SiTailwindcss ,SiMongodb,SiCplusplus } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import resumesvg from "../../public/Resume/MdiResume"
//about data
const about = {
    title: 'About me',
    description:'Skilled software developer with expertise in full-stack web development(MongoDB , Express , ReactJs ,NodeJs , NextJS) and programming (c++,java). strong leadership abilites , committed to delivering high-quality work and fostering team success',
    info:[
        {
            fieldName : "Name",
            fieldValue: "Ram Agrawal"
        },
        {
            fieldName : "Phone",
            fieldValue: "+91 9549808067"
        },
        {
            fieldName : "Experience",
            fieldValue: "1+ Years"
        },
        {
            fieldName : "Nationality",
            fieldValue: "Indian"
        },
        {
            fieldName : "Email",
            fieldValue: "bansalram7847@gmail.com"
        },
        {
            fieldName : "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName : "Languages",
            fieldValue: "English , Hindi"
        },
    ]
}
//experience data
const experience = {
    icon : resumesvg,
    title: 'My experience',
    description:'Skilled software developer with expertise in full-stack web development(MongoDB , Express , ReactJs ,NodeJs , NextJS) and programming (c++,java). strong leadership abilites , committed to delivering high-quality work and fostering team success',
    items:[
        {
            company: "IBM",
            position : "Full Stack Developer",
            duration : "2021 sept-2024 jan",
        },
        {
            company: "Web Design Studio",
            position : "Mern Stack Developer",
            duration : "2024 april - 2024 july",
        },
        
    ]
}

//education data
const education = {
    icon : resumesvg,
    title: 'My education',
    description:'Skilled software developer with expertise in full-stack web development(MongoDB , Express , ReactJs ,NodeJs , NextJS) and programming (c++,java). strong leadership abilites , committed to delivering high-quality work and fostering team success',
    items:[
        {
            degree:"Btech in Computer Science & Eng.",
            institution:"Dr Akhilesh Das Gupta Institute of professional Studies",
            duration : "2021-2025",
            grade : "CGPA : 9.0"
        },
        {
            degree:"Higher Secondary (class 12)",
            institution:"Gyan Bharti Public School",
            duration : "2019-2021",
            grade : "Percentage:89"
        },
       
    ]
}

//skills data
const skills = {
    title : "My Skills",
    description: " Skilled software developer with expertise in full-stack web development (HTML, CSS, JavaScript, React.js) and programming (Java, Python, C++). Strong leadership abilities, committed to delivering high-quality work and fostering team success",
    skillList : [
        {
            icon : <FaHtml5/>,
            name : "HTML",
        },
        {
            icon : <FaCss3Alt/>,
            name : "CSS",
        },
        {
            icon : <FaJs/>,
            name : "Java Script",
        },
        {
            icon : <SiTailwindcss/>,
            name : "Tailwind",
        },
        {
            icon : <FaReact/>,
            name : "ReactJS",
        },
        {
            icon : <RiNextjsFill/>,
            name : "NextJS",
        },
        {
            icon : <SiMongodb/>,
            name : "MongoDB",
        },
        {
            icon : <PiFileSql/>,
            name : "SQL",
        },
        {
            icon : <FaNode/>,
            name : "NodeJS",
        },
        {
            icon : <FaJava/>,
            name : "Java",
        },
        {
            icon : <SiCplusplus/>,
            name : "c++",
        },
        {
            icon : <FaWordpress/>,
            name : "wordpress",
        },

    ]

}

import { Tabs,TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume=()=>{
 return(
   <motion.div
   initial={{opacity:0}}
   animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"},
   }}
   className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
   >
    <div className="container mx-auto">
        <Tabs defaultValue="Skills" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="w-full h-full">
                {/* skills */}
                <TabsContent value="skills" className="w-full">
                    <div className="flex flex-col gap-[30px]"></div>
                    <div className="flex flex-col gap-[30px]">
                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                    </div>

                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] my-[2rem]">
                        {skills.skillList.map((skill,index)=>{
                            return <li key={index}>
                            <TooltipProvider delayDuration={100}>
                             <Tooltip>
                                 <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-lg 
                                 flex justify-center items-center group">
                                     <div className="text-6xl group-hover:text-accent transition-all
                                     duration-300">
                                        {skill.icon}
                                        </div>
                                 </TooltipTrigger>
                                 <TooltipContent>
                                    <p>{skill.name}</p>
                                 </TooltipContent>
                             </Tooltip>
                            </TooltipProvider>
                         </li>
                        }
                        )}
                    </ul>
                </TabsContent>  

                 {/* experience */}
                 <TabsContent value="experience" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{experience.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>

                        <ScrollArea className="h-[180px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {experience.items.map((item,index)=>(
                                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10
                                    rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                        <span className="text-accent">{item.duration}</span>
                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                        <div className="flex items-center gap-3">
                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                            <p className="text-white/80">{item.company}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </ScrollArea>
                    </div>
                </TabsContent> 

                 {/* education */}
                 <TabsContent value="education" className="w-full">
                 <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{education.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>

                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {education.items.map((item,index)=>(
                                    <li key={index} className="bg-[#232329] h-[250px] py-6 px-10
                                    rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                        <span className="text-accent">{item.duration}</span>
                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                        <h5 className="text-base font-semibold ">{item.grade}</h5>
                                        <div className="flex items-center gap-3">
                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                            <p className="text-white/80">{item.institution}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </ScrollArea>
                    </div>
                </TabsContent> 

                 {/* about */}
                 <TabsContent value="about" className="w-full text-center xl:text-left">
                    <div className="flex flex-col gap-[30px]">
                        <h3 className="text-5xl font-bold">{about.title}</h3>
                        <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">{about.description}</p>
                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-20 max-w-[620px] mx-auto xl:mx-0">
                            {about.info.map((info,index)=>{
                                return <li key={index} className="flex items-center justify-start xl:justify-between gap-5 ">
                                    <span className="text-white/60">{info.fieldName}</span>
                                    <span className="text-[18px] xl:text-[15px]">{info.fieldValue}</span>
                                </li>
                            })}
                        </ul>
                    </div>
                </TabsContent> 
            </div>
        </Tabs>

    </div>

   </motion.div>
 )
}
export default Resume;