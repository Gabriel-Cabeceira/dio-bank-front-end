import React from 'react';
import { StyledButton } from './Button-styles';


interface IButtonProps {
    textContent: string;
    onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({ textContent, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {textContent}
    </StyledButton>
  )
}
