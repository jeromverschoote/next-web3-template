import { useTranslation } from 'react-i18next';

import Image from 'next/image';

import styles from './styles';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.container}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('component.footer.content')}
        <span className={styles.span}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
