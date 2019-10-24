import withLayout from '../components/Layout';
import Link from 'next/link';

const PostLink = (props: any) => (
    <li>
      <Link href={'/[id]'} as={`/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  );

const Index = () => (
    <ul>
        <PostLink id="dynamic-link" />
    </ul>
);

export default withLayout(Index);