import React from 'react';
import withLayout from '../common/Layout';
import Link from 'next/link';

const PostLink = (props: any) => (
  <li>
    <Link href={'/[id]'} as={`/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

class Main extends React.Component {
  render() {
    return (
      <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
        <PostLink id={'Link'} />
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Hi there!"
        />
      </div>
    );
  }
}

export default withLayout(Main);
