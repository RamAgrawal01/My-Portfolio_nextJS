import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { Icon } from '@iconify/react';

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/RamAgrawal01' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/ram-agrawal-267a38221/' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/ram_agrawal7847/' },
    { icon: <FaFacebookF />, path: 'https://www.facebook.com/ram.agrawal.984786/' },
    { icon: <FaYoutube />, path: '' },
    { icon: <Icon icon="simple-icons:leetcode" style={{ fontSize: '24px' }} />, path: 'https://leetcode.com/u/ramagrawal01/' },
    { icon: <Icon icon="simple-icons:geeksforgeeks" style={{ fontSize: '24px' }} />, path: 'https://www.geeksforgeeks.org/user/bansalram7847/' }
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} passHref>
                    <div className={iconStyles}>
                        {item.icon}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Socials;
