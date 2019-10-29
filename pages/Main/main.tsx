import React from 'react';
import withLayout from '../common/Layout';
import Link from 'next/link';
import PoliticianSearch from './PoliticianSearch/PoliticianSearch';

class Main extends React.Component {
  render() {
    return (
      <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
        <PoliticianSearch />
      </div>
    );
  }
}

export default withLayout(Main);
