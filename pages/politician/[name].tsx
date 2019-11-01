import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import withLayout from '../common/Layout';
import fetch from 'isomorphic-unfetch';
import { IPoliticians } from '../../src/common/models/politicians.models';
import PoliticianView from './PoliticianView/PoliticianView';
import useGlobalHook from '../../src/stores/State/politician.store';
import useGlobalDataHook from '../../src/stores/State/politicianData.store';
import { IPolitician } from '../../src/common/models/politician.models';
import CountryView from './CountryView/CountryView';

const SearchResult = (props: any) => {
  const router = useRouter();
  console.log('p', props);
  // const [politicianState, politicianActions] = useGlobalHook();
  const [politicianData, politicianDataActions] = useGlobalDataHook();

  useEffect(() => {
    politicianDataActions.setPoliticianData(props);
  }, [props]);

  return (
    <>
      {console.log('poldata', politicianData)}
      <p>SearchResult</p>
      <h1>{router.query.id}</h1>
      <CountryView />
      <PoliticianView />
    </>
  );
};

SearchResult.getInitialProps = async function({ query }: any) {
  const res = await fetch(
    `https://my.api.mockaroo.com/politicians/${query.id}.json?key=${process.env.API_KEY}`
  );
  const data = await res.json();

  return data;
};

export default withLayout(SearchResult);
