import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './Button-styles';


interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    textContent: string;
    onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({ textContent, onClick, type }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {textContent}
    </StyledButton>
  )
}
