import React from 'react';
import Link from 'next/link';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const HeaderStl = styled.div`
  ${tw`
    bg-creme
 `};
`;

const Header = () => (
  <HeaderStl>
    <Link href="/">
      <a>Home</a>
    </Link>
  </HeaderStl>
);

export default Header;
