import styles from './styles';

interface Props {
  title: string;
  data: string;
}

const InfoCard: React.FC<Props> = (props) => {
  const { title, data } = props;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.data}>{data}</p>
    </div>
  );
};

export default InfoCard;
