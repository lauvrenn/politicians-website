import React from 'react';
import useGlobalDataHook from '../../../src/stores/State/politicianData.store';
import Flex from '../../../src/common/components/Flex';
import DropdownPanel from '../../../src/common/components/DropdownPanel';

const CountryView = (props: any) => {
  const [politicianData, politicianDataActions] = useGlobalDataHook();
  return (
    <>
      <Flex className={'bg-gray-500 rounded p-10 text-lg'}>
        {/* {console.log('p', politicianData.location.country)} */}
        {politicianData.location.country}
        <DropdownPanel />
      </Flex>
    </>
  );
};

export default CountryView;
