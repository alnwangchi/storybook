import React from 'react';

interface CheckboxProps {
  name: string;
  title: string;
  checked?: boolean;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, name, title, disabled = false }) => {
  return (
    <label className='flex gap-2'>
      <input type='checkbox' checked={checked} name={name} disabled={disabled} />
      <span>{title}</span>
    </label>
  );
};

export default Checkbox;
