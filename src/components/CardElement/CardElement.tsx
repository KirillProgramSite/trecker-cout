import React, { useState } from "react";
import { ICard, IUser } from "../../types/user";
import Modal from "../UI/Modal/Modal,";
import styles from './CardElement.module.css';
import Input from "../UI/Input/Input";
import useInput from "../../hook/useInput";
import { formatCardNumber } from "../../helper/formatCardNumber";
import Button from "../UI/Button/Button";



interface CardElementProps {
  card: ICard;
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

const InfoCard: React.FC<CardElementProps> = ({ card, user, setUser }) => {
  const numberCardVal = useInput(card.numberCard);
  const dateCard = useInput(card.dateCard);
  const ownerCard = useInput(card.ownerCard);
  const balanceCard = useInput(String(card.balanceCard));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const editCard = {
      id: card.id,
      nameCard: card.nameCard,
      numberCard: numberCardVal.value,
      dateCard: dateCard.value,
      ownerCard: ownerCard.value,
      balanceCard: parseFloat(balanceCard.value),
    };

    setUser({
      ...user,
      cards: user.cards.map((c) => (c.id === card.id ? editCard : c)), // Обновляем существующую карту
    });
  };

  const deleteCard = () => {
    const delCard = user.cards.filter((c) => c.id !== card.id)
    setUser({
      ...user,
      cards: delCard,
    })
  }

  return (
    <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit}>
      <Input value={numberCardVal.value} onChange={numberCardVal.onChange} placeholder="Number Card" />
      <Input value={dateCard.value} onChange={dateCard.onChange} placeholder="Date Card" />
      <Input value={ownerCard.value} onChange={ownerCard.onChange} placeholder="Owner Card" />
      <Input value={balanceCard.value} onChange={balanceCard.onChange} placeholder="Balance" />
      <Button color="primary">Edit Card</Button>
      <Button onClick={deleteCard} color="danger">Delete Card</Button>
    </form>
  );
};

const CardElement: React.FC<CardElementProps> = ({ card, user, setUser }) => {
  const [infoCardModal, setInfoCardModal] = useState<boolean>(false);
  const onClose = () => setInfoCardModal(false);
  const titleEdit = `Edit card: ${card.nameCard}`;

  return (
    <>
      <Modal
        visible={infoCardModal}
        title={titleEdit}
        content={<InfoCard user={user} setUser={setUser} card={card} />}
        onClose={onClose}
      />
      <div className={styles.card}>
        <div className={styles.cardTitle}>{card.nameCard}</div>
        <div className={styles.cardNumber}>{formatCardNumber(card.numberCard)}</div>
        <div className={styles.dateCard}><span>valid to</span> {card.dateCard}</div>
        <div className={styles.ownerCard}>{card.ownerCard}</div>
        <div className={styles.editCard}><img onClick={() => setInfoCardModal(true)} src={`./pen.svg`} alt="editCard" /></div>
      </div>
    </>
  );
};

export default CardElement;
