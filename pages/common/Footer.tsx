import React from 'react';
import Link from 'next/link';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const FooterStl = styled.div`
  ${tw`
    absolute
    bottom-0
    left-0
    right-0
    p-8
    w-full
    items-center
    content-center
    text-black
    font-bold
    bg-navy
 `};
`;

const FooterContainer = styled.div`
  ${tw`
    px-20
    w-full
    rounded-twoxl
 `};
`;

const FooterItems = styled.div`
  ${tw`
    my-20
 `};
`;

const Footer = () => (
  <FooterStl>
    <FooterContainer>
      <FooterItems>
        <Link href="/">
          <a>Home</a>
        </Link>
      </FooterItems>
    </FooterContainer>
  </FooterStl>
);

export default Footer;
