import Link from 'next/link';
import React, { useState } from 'react';
import useGlobalHook, {
  initialState,
} from '../../../src/stores/State/politician.store';

const PoliticianSearch = (props: any) => {
  const [politicianState, politicianActions] = useGlobalHook();

  return (
    <>
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        placeholder="Hi there!"
      />
      <a
        onClick={() =>
          politicianActions.setPolitician({
            id: 1,
            first_name: 'first',
            last_name: 'last',
          })
        }
      >
        Link
      </a>
      {console.log('state', politicianState)}
      <SearchLink id={1} />
    </>
  );
};

const SearchLink = (props: any) => {
  return (
    <Link href={'/[id]'} as={`/${props.id}`}>
      <a
      // onClick={() =>
      //   props.global.setPolician({
      //     id: 1,
      //     first_name: 'first',
      //     last_name: 'last',
      //   })
      // }
      >
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
