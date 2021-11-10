import { ReactNode } from 'react';

import styles from './styles';

interface Props {
  children: string | ReactNode | ReactNode[];
}

const Paragraph: React.FC<Props> = (props) => {
  const { children } = props;
  return <h1 className={styles.container}>{children}</h1>;
};

export default Paragraph;
