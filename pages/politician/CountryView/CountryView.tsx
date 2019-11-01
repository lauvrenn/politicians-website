import React from 'react';
import useGlobalDataHook from '../../../src/stores/State/politicianData.store';
import Flex from '../../../src/common/components/Flex';

const CountryView = (props: any) => {
  const [politicianData, politicianDataActions] = useGlobalDataHook();
  return (
    <>
      <Flex className={'bg-gray-500 rounded p-10 text-lg'}>
        {politicianData.location.country}
      </Flex>
    </>
  );
};

export default CountryView;
