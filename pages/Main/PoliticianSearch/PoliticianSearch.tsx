import Link from 'next/link';
import React from 'react';
import useGlobalHook from '../../../src/stores/State/politician.store';
import fetch from 'isomorphic-unfetch';
import SearchField from '../../../src/common/components/SearchField';

const PoliticianSearch = (props: any) => {
  const [politicianState, politicianActions] = useGlobalHook();

  return (
    <>
      <SearchField placeholder={'Find a politician...'} />
      {console.log('politiciansearch', props)}
      {console.log('politiciansearch, state', politicianState)}
      <SearchLink id={1} politicianActions={politicianActions} />
    </>
  );
};

const SearchLink = (props: any) => {
  return (
    <Link href={'/politician/[id]'} as={`/politician/${props.id}`}>
      <a
        onClick={() =>
          props.politicianActions.setPolitician({
            id: 1,
            first_name: 'first',
            last_name: 'last',
          })
        }
      >
        {console.log('id', props.id)}
        {props.id}
      </a>
    </Link>
  );
};

PoliticianSearch.getInitialProps = async function() {
  const res = await fetch(
    `https://my.api.mockaroo.com/politicians.json?key=${process.env.API_KEY}`
  );
  const data = await res.json();

  return data;
};

export default PoliticianSearch;
