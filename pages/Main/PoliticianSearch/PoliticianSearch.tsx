import Link from 'next/link';
import React from 'react';
import useGlobalHook from '../../../src/stores/State/politician.store';
import useGlobalDataHook from '../../../src/stores/State/politicianData.store';
import fetch from 'isomorphic-unfetch';
import SearchField from '../../../src/common/components/SearchField';
import { useRouter } from 'next/router';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import Button from '../../../src/common/components/Button';

const SearchPanel = styled.div`
  ${tw`
  p-1
  rounded-xl
 `};
`;

const PoliticianSearch = (props: any) => {
  const router = useRouter();
  const [politicianState, politicianActions] = useGlobalHook();
  const [politicianData, politicianDataActions] = useGlobalDataHook();

  return (
    <>
      <SearchPanel>
        <SearchField placeholder={'Find a politician...'} />
      </SearchPanel>
      {console.log('politiciansearch', props)}
      {console.log('politiciansearch, state', politicianState)}
      <Button
        onClick={() =>
          politicianActions.setPolitician({
            id: 1,
            first_name: 'first',
            last_name: 'last',
          })
        }
      >
        Set
      </Button>
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
      <Button>
        {console.log('id', props.politician.id)}
        Search
      </Button>
    </Link>
  );
};

PoliticianSearch.getInitialProps = async function() {
  const res = await fetch(
    `https://my.api.mockaroo.com/politicians.json?key=$`
  );
  const data = await res.json();

  return data;
};

export default PoliticianSearch;
