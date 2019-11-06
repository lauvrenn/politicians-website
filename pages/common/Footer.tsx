import React from 'react';
import Link from 'next/link';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const FooterStl = styled.div`
  ${tw`
    p-8
    w-full
    items-center
    content-center
    text-black
    font-bold
 `};
`;

const FooterContainer = styled.div`
  ${tw`
    px-20
    w-full
    border-livegreen
    border-8
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
