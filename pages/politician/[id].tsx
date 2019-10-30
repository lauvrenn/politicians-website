import React from 'react';
import { useRouter } from 'next/router';
import withLayout from '../common/Layout';
import fetch from 'isomorphic-unfetch';
import { IPoliticians } from '../../src/common/models/politicians.models';
import PoliticianView from './PoliticianView/PoliticianView';
import useGlobalHook from '../../src/stores/State/politician.store';
// import API_KEY from '../.env';

const SearchResult = () => {
  const [politicianState, politicianActions] = useGlobalHook();
  const router = useRouter();

  return (
    <>
      <p>SearchResult</p>
      <h1>{router.query.id}</h1>
      <PoliticianView />
    </>
  );
};

export default withLayout(SearchResult);
