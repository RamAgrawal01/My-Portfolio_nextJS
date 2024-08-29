"use client"; // Ensure this is at the top only if necessary

import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuBurger } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathName = usePathname();
  return (

 <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuBurger className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col ">
        <div className='mt-28 mb-32 text-center text-2xl'>
            <Link href="">
                <h1 className='text-4xl font-semibold'>Ram Agrawal<span className='text-accent'>.</span></h1>
            </Link>
        </div>

        <nav className='flex flex-col justify-center items-center gap-8'>
            {links.map((link,index)=>(
                <Link href={link.path} key={index}
                className={`text-xl capitalize hover:text-accent transition-all
                ${link.path===pathName && "text-accent border-b-2 border-accent"}`}>
                    {link.name}
                </Link>
            ))}
        </nav>
      </SheetContent>
    </Sheet>


   

  );
}

export default MobileNav;