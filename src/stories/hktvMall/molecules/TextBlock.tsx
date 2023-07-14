import React from 'react';
import Badge from '../atom/Badge';

interface TextBlockProps {
  title: string;
  content: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ title, content }) => {
  return (
    <div className='p-2 space-y-2'>
      <p>{title}</p>
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
