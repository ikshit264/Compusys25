import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface FooterLinkProps {
  link: string;
  msg: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ link, msg }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 pl-4 text-[#a5a3a3] hover:text-white transition-all duration-500 group"
    >
      {/* Arrow Icon */}
      <FaArrowRight className="text-xl group-hover:translate-x-2 transition-transform duration-200" />
      {/* Link Text */}
      <span className='text-lg'>{msg}</span>
    </a>
  );
};

export default FooterLink;
