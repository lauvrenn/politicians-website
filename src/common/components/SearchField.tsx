import React from 'react';

interface IProps {
  placeholder?: string;
}

export default function SearchField(props: IProps, { ...other }: any) {
  return (
    <input
      className="bg-white focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
      type="text"
      placeholder={props.placeholder}
      {...props}
    />
  );
}
