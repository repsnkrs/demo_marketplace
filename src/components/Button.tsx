import React from 'react';

import '../styles/components.css';
import { BtnProps } from '../interfaces/props';

const Button: React.FC<BtnProps> = ({
  children,
  onClick,
  primary }) => {
  return (
    <button className={primary ? 'btn-primary' : 'btn-alt'} onClick={onClick}>{children}</button>
  );
}

export default Button;