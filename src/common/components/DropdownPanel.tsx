import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const DropdownContainer = styled.div`
  ${tw`
  py-2
  mt-2
  w-48 
  bg-white 
  rounded-lg 
  text-blue-300 
  shadow-md
  `}
`;

const DropdownItem = styled.a`
  ${tw`
  block 
  px-4 
  py-2 
  text-gray-800 
  hover:bg-indigo-400 
  hover:text-white 
  hover:text-bold
  `}
`;

const DropdownPanel = ({ children }: any, { ...buttonProps }: any) => {
  return (
    <>
      {/* <button
      className="px-2 py-1 rounded-lg bg-green-400 text-green-800 text-xl font-light uppercase shadow-md hover:shadow-lg"
      {...buttonProps}
    >
      {children}
    </button> */}

      <DropdownContainer>
        <DropdownItem>Account</DropdownItem>
        <DropdownItem>Account</DropdownItem>
        <DropdownItem>Account</DropdownItem>
      </DropdownContainer>
    </>
  );
};

export default DropdownPanel;
