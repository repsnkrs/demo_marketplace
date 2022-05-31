import React from 'react';

export interface BtnProps {
  primary: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export interface InputProps {
  primary: boolean;
  value: string;
  onChange: (value: any) => void;
  placeholder?: string;
  type: string;
}