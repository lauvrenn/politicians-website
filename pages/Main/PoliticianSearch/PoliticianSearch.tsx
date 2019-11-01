import Link from 'next/link';
import React from 'react';
import useGlobalHook from '../../../src/stores/State/politician.store';
import useGlobalDataHook from '../../../src/stores/State/politicianData.store';
import fetch from 'isomorphic-unfetch';
import SearchField from '../../../src/common/components/SearchField';
import { useRouter } from 'next/router';

const PoliticianSearch = (props: any) => {
  const router = useRouter();
  const [politicianState, politicianActions] = useGlobalHook();
  const [politicianData, politicianDataActions] = useGlobalDataHook();

  return (
    <>
      <SearchField placeholder={'Find a politician...'} />
      {console.log('politiciansearch', props)}
      {console.log('politiciansearch, state', politicianState)}
      <a
        onClick={() =>
          politicianActions.setPolitician({
            id: 1,
            first_name: 'first',
            last_name: 'last',
          })
        }
      >
        Set
      </a>
      <SearchLink politician={politicianState} />
    </>
  );
};

const SearchLink = (props: any) => {
  return (
    <Link
      // href={'/politician/[id]'}
      href={{
        pathname: '/politician/[name]',
        query: { id: props.politician.id },
      }}
      as={`/politician/${props.politician.last_name}-${props.politician.first_name}`}
    >
      <a>
        {console.log('id', props.politician.id)}
        Search
      </a>
    </Link>
  );
};

PoliticianSearch.getInitialProps = async function() {
  const res = await fetch(
    `https://my.api.mockaroo.com/politicians.json?key=914004a0`
  );
  const data = await res.json();

  return data;
};

export default PoliticianSearch;
