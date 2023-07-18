import React from 'react';
import Badge from '../atom/Badge';

interface TextBlockProps {
  title: string;
  content: string;
  className?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ title, content, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <p className='text-left'>{title}</p>
      <div className='flex justify-between'>
        <p>{content}</p>
        <div>
          <Badge text='status' />
        </div>
      </div>
    </div>
  );
};

export default TextBlock;
