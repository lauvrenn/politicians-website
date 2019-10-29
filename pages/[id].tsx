import React from 'react';
import { useRouter } from 'next/router';
import withLayout from './common/Layout';
import fetch from 'isomorphic-unfetch';
import { IPoliticians } from '../src/common/models/politicians.models';
import PoliticianView from './PoliticianView/PoliticianView';
// import API_KEY from '../.env';

const Search = (props: IPoliticians) => {
  const router = useRouter();

  return (
    <>
      {/* {console.log('KEY', process.env.API_KEY)} */}
      {console.log('props', props)}
      <h1>{router.query.id}</h1>
      <PoliticianView politicianID={props.id} />
    </>
  );
};

export default withLayout(Search);
