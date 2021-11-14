import styles from './styles';

import Button from "../Button";
import Modal from "../Modal";

import { useState } from 'react';

interface Props {
  title: string;
  description: string;
}

const Card: React.FC<Props> = (props) => {
  const { title, description } = props;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  return (
    <div className={styles.container}>
      <div className="mr-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>

      <Button.Primary onClick={() => openModal()}>
        Fractionize IREC
      </Button.Primary>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>
    </div>
  );
};

export default Card;
