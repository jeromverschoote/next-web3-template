import type { NextPage } from 'next';

import { useTranslation } from 'react-i18next';

import Layout from 'components/Layout';
import Card from 'components/Card';
import Text from 'components/Text';

import styles from './styles';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className={styles.container}>
        <Text.Title>
          {t('view.home.title.content')}
          <a className="text-blue-600" href="https://nextjs.org">
            {t('view.home.title.span')}
          </a>
        </Text.Title>

        <Text.Paragraph>
          {t('view.home.subtitle.content')}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            {t('view.home.subtitle.span')}
          </code>
        </Text.Paragraph>

        <div className={styles.list}>
          <Card
            title={t('view.home.card.documentation.title')}
            description={t('view.home.card.documentation.description')}
            url="https://nextjs.org/docs"
          />
          <Card
            title={t('view.home.card.learn.title')}
            description={t('view.home.card.learn.description')}
            url="https://nextjs.org/learn"
          />
          <Card
            title={t('view.home.card.examples.title')}
            description={t('view.home.card.examples.description')}
            url="https://github.com/vercel/next.js/tree/master/examples"
          />
          <Card
            title={t('view.home.card.deploy.title')}
            description={t('view.home.card.deploy.description')}
            url="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
