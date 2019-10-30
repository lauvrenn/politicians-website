import Flex from '../../../../src/common/components/Flex';
import Image from '../../../../src/common/components/Image';
import Text from '../../../../src/common/components/Text';
import useGlobalHook from '../../../../src/stores/State/politician.store';

const PoliticianProfile = () => {
  const [politicianState, politicianActions] = useGlobalHook();
  return (
    <>
      <Flex>
        {/* <Image src={} />  */}
        <Flex className="bg-gray-600"></Flex>
        <Flex>
          <Text>
            {politicianState.first_name} {politicianState.last_name}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default PoliticianProfile;
