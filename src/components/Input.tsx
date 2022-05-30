import React from 'react';

import '../styles/components.css';
import { InputProps } from '../interfaces/props';

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  value,
  primary }) => {
  return (
    <input className={primary ? 'input-primary' : 'input-alt'} value={value} placeholder={placeholder} onChange={onChange} />
  );
}

export default Input;