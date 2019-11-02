import React from 'react';
// import '../public/build/tailwind.css';
import { IPolitician } from '../../../src/common/models/politician.models';
import useGlobalHook from '../../../src/stores/State/politician.store';
import useGlobalDataHook from '../../../src/stores/State/politicianData.store';
import Flex from '../../../src/common/components/Flex';
import PoliticianProfile from './Profile/PoliticianProfile';
import PoliticianDashboard from './Dashboard/PoliticianDashboard';

const PoliticianView = () => {
  const [politicianState, politicianActions] = useGlobalHook();
  const [politicianData, politicianDataActions] = useGlobalDataHook();
  return (
    <>
      {console.log('state', politicianData)}
      <Flex>
        <PoliticianProfile />
        <PoliticianDashboard />
      </Flex>
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
