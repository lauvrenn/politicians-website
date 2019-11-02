// import Flex from '../../../src/common/components/Flex';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import Flex from '../../../src/common/components/Flex';

const Roll = styled(Flex)`
  ${tw`
  bg-blue-600 w-full h-10
 `};
`;

const RollItem = styled.div`
  ${tw`w-10 h-10`};
`;

const PoliticianRoll = () => {
  return (
    <Roll>
      <RollItem>First</RollItem>
      <RollItem>Second</RollItem>
      <RollItem>Third</RollItem>
    </Roll>
  );
};

export default PoliticianRoll;
