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
      {console.log('props', props)}
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

Search.getInitialProps = async function() {
  const res = await fetch(
    `https://my.api.mockaroo.com/politicians/?key=${process.env.API_KEY}`
  );
  const data = await res.json();
  return {
    politicians: data,
  };
};

export default withLayout(Search);
