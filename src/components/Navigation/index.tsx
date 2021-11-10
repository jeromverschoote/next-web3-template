import { useContext } from 'react';

import { useTranslation } from 'react-i18next';

import { useMetaMask } from 'hooks/useMetaMask';

import Context from 'context';

import Image from 'next/image';
import Button from 'components/Button';

import styles from './styles';

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const { account } = useMetaMask();

  const { value, set, clear } = useContext(Context.Wallet);

  const isConnected = value !== null;

  return (
    <header className={styles.container}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.span}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
        </span>
      </a>

      {isConnected ? (
        <Button.Secondary onClick={clear}>{value}</Button.Secondary>
      ) : (
        <Button.Primary onClick={() => set(account)}>
          {t('label.toConnect')}
        </Button.Primary>
      )}
    </header>
  );
};

export default Navigation;
