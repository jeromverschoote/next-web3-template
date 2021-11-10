import { ReactNode } from 'react';

import styles from './styles';

interface Props {
  children: string | ReactNode;
  onClick: () => void;
}

const SecondaryButton: React.FC<Props> = (props) => {
  const { children = 'Label', onClick } = props;
  return (
    <button className={styles.container} onClick={onClick}>
      {children}
    </button>
  );
};

export default SecondaryButton;
