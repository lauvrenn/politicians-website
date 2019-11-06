import React from 'react';
import Link from 'next/link';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const HeaderStl = styled.div`
  ${tw`
    border-black
    border-b-2
    p-4
    flex
 `};
`;

const HeaderItem = styled.div`
  ${tw`
    ml-10
    border-r-4
    border-livegreen
    py-2
    px-5
 `};
`;

const Header = () => (
  <HeaderStl>
    <HeaderItem>
      <Link href="/">
        <a>Home</a>
      </Link>
    </HeaderItem>
  </HeaderStl>
);

export default Header;
