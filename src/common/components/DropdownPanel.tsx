import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const DropdownContainer = styled.div`
  ${tw`bg-black flex text-blue-300`}
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
        <a href="#">Account</a>
        <a href="#">Account</a>
        <a href="#">Account</a>
      </DropdownContainer>
    </>
  );
};

export default DropdownPanel;
