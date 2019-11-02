import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const FlexBox = styled.div`
  ${tw`flex`};
`;

const Flex = (props: any) => <FlexBox {...props}>{props.children}</FlexBox>;

export default Flex;
