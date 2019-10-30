import React from 'react';
import Flex from './Flex';

interface IProps {
  src: string;
}

const Image = (props: IProps, { ...other }: any) => {
  return (
    <Flex className="items-center">
      <img src={props.src} {...other} />
    </Flex>
  );
};

export default Image;
