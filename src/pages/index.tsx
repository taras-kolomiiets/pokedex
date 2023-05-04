import HomePage from '@/page-content/Home';
import { withPageSettings } from '@/utils';

const Home = () => {
  return <HomePage />;
};

export const getStaticProps = withPageSettings({});

export default Home;
