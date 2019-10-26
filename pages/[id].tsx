import React from 'react';
import { useRouter } from 'next/router';
import withLayout from './common/Layout';
import fetch from 'isomorphic-unfetch';
import { IPoliticians } from '../src/common/models/politicians.models';
// import API_KEY from '../.env';

const Search = (props: IPoliticians[]) => {
  const router = useRouter();

  return (
    <>
      {console.log('KEY', process.env.API_KEY)}
      {console.log('props', props)}
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

Search.getInitialProps = async function() {
  const res = await fetch(
    `https://my.api.mockaroo.com/politicians.json?key=${process.env.API_KEY}`
  );
  const data = await res.json();
  console.log('length', data.length);
  return data;
};

export default withLayout(Search);
