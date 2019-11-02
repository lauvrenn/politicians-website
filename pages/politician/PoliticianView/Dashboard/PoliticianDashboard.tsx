import Flex from '../../../../src/common/components/Flex';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const Dashboard = styled(Flex)`
  ${tw`
    bg-gray-600 w-4/6
 `};
`;

const PoliticianDashboard = () => {
  return <Dashboard>Dashboard</Dashboard>;
};

export default PoliticianDashboard;
