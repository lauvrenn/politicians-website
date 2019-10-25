import React from 'react'
import withLayout from '../components/Layout';
import Link from 'next/link';


const PostLink = (props: any) => (
    <li>
      <Link href={'/[id]'} as={`/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  );

class Index extends React.Component {
  render() {
    return (
      <></>
      // <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" placeholder="Hi there!">
    )
  }
}

export default withLayout(Index);