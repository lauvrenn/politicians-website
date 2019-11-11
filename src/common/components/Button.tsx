import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const ButtonStyle = styled.button`
  ${tw`
  px-5 
  py-1 
  rounded-lg 
  bg-liveGreen
  text-white
  text-md
  font-light
  border-white
  border-2
 `};
`;

const Button = ({ children }: any, { ...buttonProps }: any) => {
  return <ButtonStyle {...buttonProps}>{children}</ButtonStyle>;
};

export default Button;
