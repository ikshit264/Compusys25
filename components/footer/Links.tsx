'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface LinkItem {
  label: string;
  url: string;
  icon: React.ReactNode;
  target?: string;
}

interface LinksProps {
  links?: LinkItem[];
}

const Links: React.FC<LinksProps> = ({ links = [] }) => {
  if (!links || links.length === 0) {
    return null; // Or you could return a placeholder/default content
  }

  return (
    <div className="flex flex-col gap-3">
      {links.map((link, index) => (
        <a
          key={index}
          className="font-rango sm:text-base md:text-lg flex items-center gap-2"
          href={link.url}
          target={link.target || '_self'}
          rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          <div className='flex items-center justify-center gap-3'>
            <motion.div
              className='size-10 rounded-full bg-[#b2d99a] text-[#195908] flex items-center justify-center'
              whileHover={{
                scale: 1.1,
                backgroundColor: '#91c085',
                transition: { duration: 0.2 }
              }}
              initial={{ scale: 1 }}
              aria-hidden="true"
            >
              {link.icon}
            </motion.div>
            <span>{link.label}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Links;

