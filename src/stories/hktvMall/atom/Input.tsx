import clsx from 'clsx';
import React from 'react';

interface InputProps {
  label: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  errorMsg?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label = 'name',
  name,
  disabled = false,
  placeholder = '',
  type,
  errorMsg = false,
  onChange,
  ...props
}) => {
  return (
    <div className='w-full text-start'>
      <label className='flex justify-center gap-2 flex-col' htmlFor={name}>
        <span className='ml-1'>{label}</span>
        <input
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={clsx(
            'border-[1px] border-[#e2e2e2] px-2 py-1 rounded-md focus-visible:outline-[#3a993b] w-full',
            [errorMsg && ' border-red-600'],
          )}
          {...props}
        />
      </label>
      {errorMsg && <span className='text-red-600 text-sm'>{errorMsg}</span>}
    </div>
  );
};

export default Input;
