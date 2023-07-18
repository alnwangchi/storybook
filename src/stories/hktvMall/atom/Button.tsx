import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps {
  text: string;
  color?: 'primary' | 'dark';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  text,
  color = 'primary',
  disabled,
  type = 'button',
  className,
  onClick = () => undefined,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        'rounded-md text-white py-2 px-10 hover:bg-[#5b1219] w-full',
        {
          'bg-[#b0b0b0] hover:bg-[#b0b0b0]': disabled,
        },
        {
          'bg-[#125b54]': color === 'dark',
        },
        {
          'bg-[#3b9a3c]': color === 'primary',
        },
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
