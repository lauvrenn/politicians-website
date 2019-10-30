import React from 'react';
// import '../public/build/tailwind.css';
import { IPolitician } from '../../src/common/models/politician.models';

interface IProps {
  politicianID: string;
}

const PoliticianView = (props: IProps) => {
  return (
    <>
      {/* {console.log('hi', props)} */}
      <div>hi</div>
    </>
  );
};

// PoliticianView.getInitialProps = async function(props: IProps) {
// const res = await fetch(
//   `https://my.api.mockaroo.com/politicians/${props.politicianID}.json?key=${process.env.API_KEY}`
// );

// const data = await res.json();
// console.log('length', data.length);
// return data;
// };

export default PoliticianView;
