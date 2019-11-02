import Flex from '../../../../src/common/components/Flex';
import Image from '../../../../src/common/components/Image';
import Text from '../../../../src/common/components/Text';
import useGlobalHook from '../../../../src/stores/State/politician.store';
import useGlobalDataHook from '../../../../src/stores/State/politicianData.store';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const Profile = styled(Flex)`
  ${tw`
  bg-gray-600 w-2/6
 `};
`;

const PoliticianProfile = () => {
  const [politicianData, politicianDataActions] = useGlobalDataHook();
  return (
    <>
      <Profile>
        {/* <Image src={} />  */}
        <Flex></Flex>
        <Flex>
          <Text>
            {politicianData.first_name} {politicianData.last_name}
          </Text>
        </Flex>
      </Profile>
    </>
  );
};

export default PoliticianProfile;
