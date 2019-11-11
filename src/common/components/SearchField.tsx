import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

interface IProps {
  placeholder?: string;
}

const SearchStyle = styled.input`
  ${tw`
  bg-white 
  focus:outline-none
  rounded-lg 
  py-2 
  px-4 
  block 
  w-3/4 
  appearance-none 
  leading-normal
 `};
`;

export default function SearchField(props: IProps, { ...other }: any) {
  return <SearchStyle type="text" placeholder={props.placeholder} {...props} />;
}
