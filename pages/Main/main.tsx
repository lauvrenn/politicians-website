import React from 'react';
import withLayout from '../common/Layout';
import Link from 'next/link';
import PoliticianSearch from './PoliticianSearch/PoliticianSearch';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import Text from '../../src/common/components/Text';

const MainView = styled.div`
  ${tw`
    my-5
    content-center
    text-center
 `};
`;

const SearchContainer = styled.div`
  ${tw`
    h-64
    bg-liveGreen
    px-20
    py-16
    w-11/12
    rounded-twoxl
    items-center
    inline-block
 `};
`;

const Main = (props: any) => {
  return (
    <MainView>
      <SearchContainer>
        <Text>Find a </Text>
        <PoliticianSearch {...props} />
      </SearchContainer>
    </MainView>
  );
};

Main.getInitialProps = PoliticianSearch.getInitialProps;

export default withLayout(Main);
