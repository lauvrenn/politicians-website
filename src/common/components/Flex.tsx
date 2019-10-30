import React from 'react';

const Flex = (props: any) => (
  <div className={'flex'} {...props}>
    {props.children}
  </div>
);

export default Flex;
