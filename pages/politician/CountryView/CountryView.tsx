import React from 'react';
import useGlobalDataHook from '../../../src/stores/State/politicianData.store';
import Flex from '../../../src/common/components/Flex';
import DropdownPanel from '../../../src/common/components/DropdownPanel';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const View = styled(Flex)`
  ${tw`h-10 bg-gray-500 p-10 text-lg`};
`;

const CountryView = (props: any) => {
  const [politicianData, politicianDataActions] = useGlobalDataHook();
  return (
    <>
      <View>
        {/* {console.log('p', politicianData.location.country)} */}
        {politicianData.location.country}
      </View>
    </>
  );
};

export default CountryView;
