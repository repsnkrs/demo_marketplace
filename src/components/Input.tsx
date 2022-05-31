import React from 'react';

import '../styles/components.css';
import { InputProps } from '../interfaces/props';

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  value,
  type,
  primary }) => {
  return (
    <input type={type} className={primary ? 'input-primary' : 'input-alt'} value={value} placeholder={placeholder} onChange={onChange} />
  );
}

export default Input;