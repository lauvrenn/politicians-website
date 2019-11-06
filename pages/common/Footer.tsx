import React from 'react';
import Link from 'next/link';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const FooterStl = styled.div`
  ${tw`
    w-full
    items-center
    bg-teal-400
    content-center
    p-10
    rounded-tl-lg
    rounded-tr-lg
 `};
`;

const Footer = () => (
  <FooterStl>
    <Link href="/">
      <a className={'font-bold text-white '}>Home</a>
    </Link>
  </FooterStl>
);

export default Footer;
