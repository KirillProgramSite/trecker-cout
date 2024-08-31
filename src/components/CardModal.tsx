import React from "react";
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import { ICard, IUser } from "../types/user";
import useInput from '../hook/useInput';
interface CardFormProps {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardForm: React.FC<CardFormProps> = ({ user, setUser, setModal }) => {
  const nameCardValue = useInput();
  const numberCardVal = useInput();
  const dateCard = useInput();
  const ownerCard = useInput();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!nameCardValue.value || !numberCardVal.value || !dateCard.value || !ownerCard.value) {
      alert("Please fill in all fields");
      return;
    }

    const newCard: ICard = {
      id: Date.now(),
      nameCard: nameCardValue.value,
      numberCard: numberCardVal.value,
      dateCard: dateCard.value,
      ownerCard: ownerCard.value,
      balanceCard: 0,
    };

    setUser({
      ...user,
      cards: [...user.cards, newCard],
    });

    nameCardValue.reset();
    numberCardVal.reset();
    dateCard.reset();
    ownerCard.reset();

    setModal(false);
  };

  return (
    <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit} className="formAddCard">
      <Input value={nameCardValue.value} onChange={nameCardValue.onChange} placeholder="Name Card" />
      <Input value={numberCardVal.value} onChange={numberCardVal.onChange} placeholder="Number Card" />
      <Input value={dateCard.value} onChange={dateCard.onChange} placeholder="Date Card" />
      <Input value={ownerCard.value} onChange={ownerCard.onChange} placeholder="Owner Card" />
      <Button color="primary">Add new card</Button>
    </form>
  );
};

export default CardForm;
