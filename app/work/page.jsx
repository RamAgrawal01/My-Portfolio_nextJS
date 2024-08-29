"use client";
import React from 'react';
import { motion } from 'framer-motion';
import resultManagement from "../../public/assets/work/resultmanagement.png";
import blogWebsite from "../../public/assets/work/blogWebsite.png"
import tornedEdu from "../../public/assets/work/tornedEdu.png"
import currencyConvertor from "../../public/assets/work/currencyConvertor.png";
import modernChair from "../../public/assets/work/modernChair.png";
import weatherApp from "../../public/assets/work/weatherApp.png"
import randomGIF from "../../public/assets/work/randomGIF.png";
import shopApp from "../../public/assets/work/shopApp.png";
import tictac from "../../public/assets/work/tictac.png";
import topCourse from "../../public/assets/work/topCourse.png";
import tourismApp from "../../public/assets/work/tourismApp.png";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight,BsGithub } from 'react-icons/bs';

import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderButton from '@/components/ui/WorkSliderButton';

const projects =[
  {

    num : '01',
    category : 'MERN',
    title : 'TornedEdu Edtech Platform',
    github : 'https://github.com/RamAgrawal01/torned_backend',
    live : 'https://torned-site-fronthend.vercel.app/',
    description: "TornedEdu is a fully functional ed-tech platform featuring separate accounts for instructors and students. Instructors can create and manage courses and quizzes, view student profiles, and monitor progress. Students can purchase and view courses, track their learning progress, and take quizzes.",
    stack : [{name:"HTML"} , {name:"Tailwind CSS"} , {name:"ReactJS"} , {name:"MongoDB"} , {name:"nodeJS"} ],
    image : tornedEdu
  
  },
  {

    num : '02',
    category : 'MERN',
    title : 'Result Management System',
    github : 'https://github.com/RamAgrawal01/Result_management_system',
    live : 'https://result-management-system-phi.vercel.app/',
    description : 'It  is an online result management system developed with the MERN stack (MongoDB, Express.js, React, Node.js). It features real-time calculation of total marks and individual subject scores, and allows teachers to update student marks. Users can view results using roll numbers (155, 134, 140, 156). The platform includes a responsive and user-friendly interface designed with Tailwind CSS.',
    stack : [{name:"HTML"} , {name:"Tailwind CSS"} , {name:"ReactJS"} , {name:"MongoDB"} , {name:"nodeJS"} ],
    image : resultManagement
  
  },
  {

    num : '03',
    category : 'MERN',
    title : 'BlogWebsite',
    github : 'https://github.com/RamAgrawal01/Blog_Website',
    live : 'https://github.com/RamAgrawal01/tornedSite_fronthend',
    description : 'Dynamic Blog website with : Title , categories , tags ; clickable for similar content , Light/Dark mode toggle and footer with page navigation',
    stack : [{name:"HTML"} , {name:"tailwind"} , {name:"React"} ],
    image : blogWebsite
  
  },
  {

    num : '04',
    category : 'Backend',
    title : 'API to Fetch Gold and Silver',
    github : 'https://github.com/RamAgrawal01/API-to-fetch-gold-and-Silver-prices-to-database',
    live : 'https://github.com/RamAgrawal01/API-to-fetch-gold-and-Silver-prices-to-database',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quo quas asperiores dolor minima delectus incidunt odio necessitatibus perferendis, animi nemo in totam facere quidem molestiae assumenda a placeat autem!',
    stack : [{name:"MongoDB"} , {name:"nodeJS"}],
    image : resultManagement
  
  },
  {

    num : '05',
    category : 'MERN',
    title : 'ShopApp',
    github : 'https://github.com/RamAgrawal01/Shop-App',
    live : 'https://shop-app-livid.vercel.app/',
    description : 'Developed a shopping cart application using React and Redux. Features include adding and removing products from the cart, dynamically calculating and displaying total prices based on cart contents, and enhancing user experience with seamless interaction between product listings and cart functionalities.',
    stack : [{name:"HTML"} , {name:"Tailwind CSS"} , {name:"ReactJS"} , {name:"MongoDB"} , {name:"nodeJS"} ],
    image : shopApp
  
  },
  {

    num : '06',
    category : 'Fronthend',
    title : 'Tourism App',
    github : 'https://github.com/RamAgrawal01/ToursimApp',
    live : 'https://toursim-app.vercel.app/',
    description : 'Developed a tourism app using ReactJS and Tailwind CSS. The app displays information about various cities and allows users to like or unlike cities. Liked cities are added to a wishlist, while unliking them removes them from the wishlist. This feature enhances user interaction and customization of the travel experience.',
    stack : [{name:"TailwindCSS"} , {name:"ReactJS"}],
    image : tourismApp
  
  },
  {

    num : '07',
    category : 'Top Course App',
    title : 'Top Course App',
    github : 'https://github.com/RamAgrawal01/TopCourse-App',
    live : 'https://top-course-app-theta.vercel.app/',
    description : 'Developed a Top Course App using React and Tailwind CSS. The app features a filtering system that allows users to view courses based on selected categories, such as Development or AI. Each course includes a detailed description with a Read More and Read Less feature to expand or collapse the text, enhancing user experience and ease of navigation.',
    stack : [{name:"TailwindCSS"} , {name:"ReactJS"}],
    image : topCourse
  
  },
  {

    num : '08',
    category : 'Fronthend',
    title : 'Random GIF',
    github : 'https://github.com/RamAgrawal01/Random-GIF',
    live : 'https://random-gif-kappa-lilac.vercel.app/',
    description : 'Created a Random GIF App using React Context and Tailwind CSS. The application features two blocks: one displays a GIF that automatically changes, while the other allows users to enter a category (e.g., car, baby). Based on the selected category, GIFs related to that category are displayed, providing a dynamic and interactive user experience.',
    stack : [{name:"TailwindCSS"} , {name:"ReactJS"}],
    image : randomGIF
  
  },
  {

    num : '09',
    category : 'Fronthend',
    title : 'Currency Convertor',
    github : 'https://github.com/RamAgrawal01/Currency_Convertor',
    live : 'https://ramagrawal01.github.io/Currency_Convertor/',
    description : 'Developed a Currency Converter using HTML, CSS, and JavaScript. Users can input an amount, select the desired currency, and click the submit button to receive the converted amount in the selected currency. The app provides real-time currency conversion with an easy-to-use interface.',
    stack : [{name:"HTML"} ,{name:"CSS"}, {name:"JavaScript"}],
    image : currencyConvertor
  
  },
  {

    num : '10',
    category : 'Fronthend',
    title : 'Tic Tac Toe',
    github : 'https://github.com/RamAgrawal01/Tic-Tack-toe',
    live : 'https://ramagrawal01.github.io/Tic-Tack-toe/',
    description : 'Developed a classic Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game features a 3x3 grid where players take turns to place "X" or "O" in the boxes. The game detects winning combinations and displays the winner, or declares a tie if all boxes are filled without a winner. The game allows for resetting with a button to start a new game, and dynamically updates the UI based on player actions and game state.',
    stack : [{name:"HTML"} ,{name:"CSS"}, {name:"JavaScript"}],
    image : tictac
  
  },
  {

    num : '11',
    category : 'Fronthend',
    title : 'Wheather App',
    github : 'https://github.com/RamAgrawal01/Wheather-app',
    live : 'https://ramagrawal01.github.io/Wheather-app/',
    description : 'Developed a Weather App using HTML, CSS, and JavaScript. The app allows users to view current weather information based on their location or by searching for a city. It features geolocation functionality to fetch weather data automatically and provides an interface for manually searching cities. Users can view detailed weather information including temperature, humidity, wind speed, and more. The app also handles errors gracefully and displays appropriate messages if the location is not accessible or if the city is not found.',
    stack : [{name:"HTML"} ,{name:"CSS"}, {name:"JavaScript"}],
    image : weatherApp
  
  },
  {

    num : '12',
    category : 'Fronthend',
    title : 'Bansal Chair House',
    github : 'https://github.com/RamAgrawal01/Bansal_chairHouse',
    live : 'https://ramagrawal01.github.io/Bansal_chairHouse/',
    description : 'Developed the Bansal Chair House project to showcase advanced CSS styling techniques. The app features a virtual chair selection interface where users can choose different colors for both the chair and the background. Each color selection updates the chair’s appearance and background in real-time. Additionally, the project includes detailed information about each chair, including its description and price, with an option to add the chair to the cart. This project highlights dynamic CSS styling and interactive user experiences.',
    stack : [{name:"HTML"} ,{name:"CSS"}],
    image : modernChair
  
  },
 
  
  
]
const Work = () => {
  const [project , setProject] = useState(projects[0]);

  const handleSlideChange =(swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project with based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
   <motion.section 
   initial={{opacity:0}}
   animate={{opacity:1}}
   className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
   >
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
        <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between
         order-2 xl:order-none'>
          <div className='flex flex-col gap-[30px] h-[50%]'>
            {/* outline num */}
            <div className='text-7xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
            {/* project category */}
            <h2 className='text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all
            duration-500 capitalize'>{project.title}</h2>
            {/* project description */}
            <p className='text-white/60'>{project.description}</p>
            {/* Stack */}
            <ul className='flex gap-5'>
              {project.stack.map((item,index)=>{
                return <li key={index} className='text-xl text-accent'>
                  {item.name}
                  {index !== project.stack.length-1 && ","}
                </li>
              })}
            </ul>
            {/* border */}
            <div className='border border-white/20'></div>
            {/* buttons */}
            <div className='flex items-center gap-5'>
              {/* live project */}
              <Link href={project.live}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5
                  flex justify-center items-center group'>
                    <BsArrowUpRight className='text-white text-3xl group-hover:text-accent'/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live Project</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>

               {/* github project */}
               <Link href={project.github}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5
                  flex justify-center items-center group'>
                    <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github Repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>

        <div className='w-full xl:w-[50%]'>
        <Swiper
  spaceBetween={30}
  slidesPerView={1}

  className='xl:h-[520px] mb-12'
  onSlideChange={handleSlideChange}
>
  {projects.map((project, index) => {
    return (
      <SwiperSlide key={index} className='w-full'>
        <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
          {/* Overlay */}
          <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
          {/* image */}
          <div className='relative w-full h-full'>
            <Image src={project.image} fill className='object-cover'
            
            />
          </div>
        </div>
      </SwiperSlide>
    );
  })}
  {/* Slider button */}
  <WorkSliderButton containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20
  w-full justify-between xl:w-max xl:justify-none"
   btnStyles="text-accent bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px]
   flex justify-center items-center transition-all"/>
</Swiper>
        </div>
      </div>
    </div>

   </motion.section>
  );
}

export default Work;