import React from 'react';

const Text = (props: any) => {
  return <p {...props}>{props.children}</p>;
};

export default Text;
