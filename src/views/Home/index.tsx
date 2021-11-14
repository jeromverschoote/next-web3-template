import type { NextPage } from 'next';

import Layout from 'components/Layout';
import InfoCard from 'components/InfoCard';
import Card from 'components/Card';

import styles from './styles';
import { useWalletConnect } from 'hooks/useWalletConnect';

const Home: NextPage = () => {
  const { activeCerts, tokenCount } = useWalletConnect();

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.list}>
          <Card
            title="Fractionize IREC"
            description="Load up your certificates to tokenize them."
          />
          <InfoCard
            title="Tokens in circulation"
            data={tokenCount}
          />
          <InfoCard
            title="Active certificates"
            data={activeCerts}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
