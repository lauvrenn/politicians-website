// require('dotenv').config();
import React from 'react';
import Main from './Main/main';
import '../public/build/tailwind.css';

const Index = (props: any) => {
  return <Main {...props}/>
};

// TODO: can it be without async?
Index.getInitialProps = Main.getInitialProps;

// Index.getInitialProps = async function(ctx: any) {
//   let componentProps = {};
//   componentProps = Main.getInitialProps && await Main.getInitialProps();

//   return {
//     ...componentProps,
//   };
// }
export default Index;
