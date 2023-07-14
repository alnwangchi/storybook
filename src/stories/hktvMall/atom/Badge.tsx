import React, { ReactNode } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

interface BadgeProps {
  text: string;
  icon?: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ text, icon = <AiOutlineCheckCircle /> }) => {
  return (
    <div className='flex items-center gap-2'>
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
};

export default Badge;
