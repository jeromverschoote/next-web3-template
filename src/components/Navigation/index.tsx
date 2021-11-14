import { useContext } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

// import { useMetaMask } from 'hooks/useMetaMask';
import { useWalletConnect } from 'hooks/useWalletConnect';
import Button from 'components/Button';

import styles from './styles';

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  // const { account } = useMetaMask();
  const { openModal, web3, isLoggedIn } = useWalletConnect();

  // const { value, set, clear } = useContext(Context.Wallet);

  // const isConnected = value !== null;

  return (
    <header className={styles.container}>
      <Link
        href="/"
      >
        <a className={styles.span}>
        <svg viewBox="0 0 161 35" fill="none" className="fill-current text-blue-500 w-36" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.4 34.308V31.464H13.4C14.288 31.464 14.972 31.2 15.452 30.672C15.956 30.144 16.208 29.448 16.208 28.584V23.544H16.136C15.44 24.576 14.54 25.452 13.436 26.172C12.356 26.868 11.012 27.216 9.404 27.216C7.676 27.216 6.152 26.82 4.832 26.028C3.512 25.212 2.48 24.096 1.736 22.68C0.992 21.24 0.62 19.596 0.62 17.748C0.62 15.948 0.992 14.328 1.736 12.888C2.48 11.448 3.548 10.308 4.94 9.468C6.356 8.628 8.06 8.208 10.052 8.208C11.948 8.208 13.604 8.616 15.02 9.432C16.46 10.248 17.564 11.388 18.332 12.852C19.124 14.316 19.52 16.008 19.52 17.928V28.8C19.52 30.48 19.028 31.812 18.044 32.796C17.06 33.804 15.716 34.308 14.012 34.308H4.4ZM10.016 24.372C11.24 24.372 12.308 24.084 13.22 23.508C14.156 22.932 14.876 22.152 15.38 21.168C15.908 20.16 16.172 19.032 16.172 17.784C16.172 16.512 15.92 15.372 15.416 14.364C14.912 13.356 14.192 12.564 13.256 11.988C12.344 11.388 11.264 11.088 10.016 11.088C8.768 11.088 7.688 11.388 6.776 11.988C5.888 12.564 5.192 13.368 4.688 14.4C4.208 15.408 3.968 16.548 3.968 17.82C3.968 19.02 4.208 20.124 4.688 21.132C5.192 22.116 5.888 22.908 6.776 23.508C7.688 24.084 8.768 24.372 10.016 24.372ZM24.5473 27V13.86C24.5473 12.228 25.0033 10.956 25.9153 10.044C26.8513 9.108 28.1353 8.64 29.7673 8.64H33.5473V11.484H30.3793C29.5633 11.484 28.9393 11.724 28.5073 12.204C28.0753 12.66 27.8593 13.284 27.8593 14.076V27H24.5473ZM45.9325 27C43.8925 27 42.0925 26.628 40.5325 25.884C38.9965 25.116 37.7845 24.048 36.8965 22.68C36.0325 21.288 35.6005 19.668 35.6005 17.82C35.6005 15.996 35.9725 14.364 36.7165 12.924C37.4605 11.46 38.4925 10.308 39.8125 9.468C41.1325 8.628 42.6685 8.208 44.4205 8.208C46.3165 8.208 47.8885 8.616 49.1365 9.432C50.4085 10.248 51.3565 11.352 51.9805 12.744C52.6045 14.112 52.9165 15.648 52.9165 17.352C52.9165 17.928 52.8805 18.456 52.8085 18.936H39.1285C39.2485 20.064 39.6205 21.024 40.2445 21.816C40.8685 22.584 41.6605 23.172 42.6205 23.58C43.6045 23.964 44.6845 24.156 45.8605 24.156H50.6485V27H45.9325ZM39.0925 16.596H49.5685C49.5685 15.804 49.4125 14.976 49.1005 14.112C48.7885 13.248 48.2605 12.516 47.5165 11.916C46.7725 11.292 45.7405 10.98 44.4205 10.98C43.3165 10.98 42.3685 11.268 41.5765 11.844C40.8085 12.396 40.2085 13.104 39.7765 13.968C39.3685 14.808 39.1405 15.684 39.0925 16.596ZM66.4637 27C64.4237 27 62.6237 26.628 61.0637 25.884C59.5277 25.116 58.3157 24.048 57.4277 22.68C56.5637 21.288 56.1317 19.668 56.1317 17.82C56.1317 15.996 56.5037 14.364 57.2477 12.924C57.9917 11.46 59.0237 10.308 60.3437 9.468C61.6637 8.628 63.1997 8.208 64.9517 8.208C66.8477 8.208 68.4197 8.616 69.6677 9.432C70.9397 10.248 71.8877 11.352 72.5117 12.744C73.1357 14.112 73.4477 15.648 73.4477 17.352C73.4477 17.928 73.4117 18.456 73.3397 18.936H59.6597C59.7797 20.064 60.1517 21.024 60.7757 21.816C61.3997 22.584 62.1917 23.172 63.1517 23.58C64.1357 23.964 65.2157 24.156 66.3917 24.156H71.1797V27H66.4637ZM59.6237 16.596H70.0997C70.0997 15.804 69.9437 14.976 69.6317 14.112C69.3197 13.248 68.7917 12.516 68.0477 11.916C67.3037 11.292 66.2717 10.98 64.9517 10.98C63.8477 10.98 62.8997 11.268 62.1077 11.844C61.3397 12.396 60.7397 13.104 60.3077 13.968C59.8997 14.808 59.6717 15.684 59.6237 16.596ZM77.671 27V16.38C77.671 14.748 78.031 13.32 78.751 12.096C79.495 10.872 80.515 9.924 81.811 9.252C83.107 8.556 84.583 8.208 86.239 8.208C87.919 8.208 89.395 8.556 90.667 9.252C91.963 9.924 92.971 10.872 93.691 12.096C94.435 13.32 94.807 14.748 94.807 16.38V27H91.495V16.416C91.495 15.312 91.243 14.364 90.739 13.572C90.259 12.756 89.611 12.132 88.795 11.7C88.003 11.268 87.151 11.052 86.239 11.052C85.327 11.052 84.463 11.268 83.647 11.7C82.855 12.132 82.207 12.756 81.703 13.572C81.223 14.364 80.983 15.312 80.983 16.416V27H77.671ZM106.716 27.432C105.9 27.432 105.156 27.204 104.484 26.748C103.836 26.268 103.356 25.596 103.044 24.732L97.0677 8.64H100.704L106.032 23.508C106.2 23.94 106.44 24.156 106.752 24.156C107.04 24.156 107.28 23.94 107.472 23.508L112.836 8.64H116.4L110.424 24.732C110.088 25.596 109.596 26.268 108.948 26.748C108.3 27.204 107.556 27.432 106.716 27.432ZM127.69 27.432C125.818 27.432 124.15 27.012 122.686 26.172C121.246 25.308 120.106 24.156 119.266 22.716C118.45 21.252 118.042 19.62 118.042 17.82C118.042 16.02 118.45 14.4 119.266 12.96C120.106 11.496 121.246 10.344 122.686 9.504C124.15 8.64 125.818 8.208 127.69 8.208C129.562 8.208 131.218 8.64 132.658 9.504C134.122 10.344 135.262 11.496 136.078 12.96C136.918 14.4 137.338 16.02 137.338 17.82C137.338 19.62 136.918 21.252 136.078 22.716C135.262 24.156 134.122 25.308 132.658 26.172C131.218 27.012 129.562 27.432 127.69 27.432ZM127.69 24.588C128.962 24.588 130.066 24.288 131.002 23.688C131.938 23.088 132.67 22.284 133.198 21.276C133.726 20.244 133.99 19.092 133.99 17.82C133.99 16.548 133.726 15.408 133.198 14.4C132.67 13.368 131.938 12.552 131.002 11.952C130.066 11.352 128.962 11.052 127.69 11.052C126.442 11.052 125.338 11.352 124.378 11.952C123.442 12.552 122.71 13.368 122.182 14.4C121.654 15.408 121.39 16.548 121.39 17.82C121.39 19.092 121.654 20.244 122.182 21.276C122.71 22.284 123.442 23.088 124.378 23.688C125.338 24.288 126.442 24.588 127.69 24.588ZM141.585 27V0.719999H144.897V27H141.585ZM156.427 27C154.795 27 153.511 26.532 152.575 25.596C151.663 24.66 151.207 23.388 151.207 21.78V11.484H148.039V8.64H151.207V4.032H154.519V8.64H160.819V11.484H154.519V21.564C154.519 22.356 154.735 22.992 155.167 23.472C155.623 23.928 156.247 24.156 157.039 24.156H160.747V27H156.427Z" />
        </svg>
        </a>
      </Link>

    <div>
        {/* {isConnected ? (
          <Button.Secondary onClick={clear}>{value}</Button.Secondary>
        ) : (
          <Button.Primary onClick={() => set(account)}>
            {t('label.toConnect')}
          </Button.Primary>
        )} */}

        {!isLoggedIn && (
          <Button.Primary onClick={openModal}>
            {t('label.walletConnect')}
          </Button.Primary>
        )}
      </div>
    </header>
  );
};

export default Navigation;
