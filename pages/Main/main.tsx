import React from 'react';
import withLayout from '../common/Layout';
import Link from 'next/link';
import PoliticianSearch from './PoliticianSearch/PoliticianSearch';

const Main = (props: any) => {
  return (
    <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
      <p>Main</p>
      <PoliticianSearch {...props} />
    </div>
  );
};

Main.getInitialProps = PoliticianSearch.getInitialProps;

export default withLayout(Main);
