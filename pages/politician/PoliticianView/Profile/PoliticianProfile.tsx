import Flex from '../../../../src/common/components/Flex';
import Image from '../../../../src/common/components/Image';
import Text from '../../../../src/common/components/Text';
import useGlobalHook from '../../../../src/stores/State/politician.store';
import useGlobalDataHook from '../../../../src/stores/State/politicianData.store';

const PoliticianProfile = () => {
  const [politicianData, politicianDataActions] = useGlobalDataHook();
  return (
    <>
      <Flex>
        {/* <Image src={} />  */}
        <Flex className="bg-gray-600"></Flex>
        <Flex>
          <Text>
            {politicianData.first_name} {politicianData.last_name}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default PoliticianProfile;
