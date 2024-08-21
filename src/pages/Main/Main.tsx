import React, { useState } from 'react';

import Button from "../../components/UI/Button/Button";
import Chart from "../../components/Chart";
import Title from "../../components/UI/Title/Title";

import useInput from "../../hook/useInput"

import { ICard, IGoals, IUser } from "../../types/user";
import Modal from '../../components/UI/Modal/Modal,';
import Input from '../../components/UI/Input/Input';

import styles from './Main.module.css'


interface MainProps {
    user: IUser; // Правильный тип пропсов
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

const Main: React.FC<MainProps> = ({ user, setUser }) => {

    const [cardModal, setCardModal] = useState<boolean>(false);
    const onClose = () => setCardModal(false)



    return (
        <div className="container">
            <Title lv={1}>Welcome CoinsTrack, {user.name}</Title>
            <Title lv={2}>Budget chart (В разработке)</Title>
            {/* <Chart data={[user.expenses.count, user.goals.to, user.income.count]} /> */}
            <Title lv={2}>Your Cards</Title>
            {user.cards.length === 0 ? (
                <div>
                    <p>You don't have any cards in this app. Click below to add</p>
                </div>
            ) : (
                user.cards.map((card: ICard) => (
                    <div key={card.ownerCard}>{card.nameCard}</div> // Пример рендеринга карточек
                ))

            )}

            <Button onClick={() => setCardModal(true)} color="default">Add Card +</Button>

            <Modal
                visible={cardModal}
                title='Add card in your profile'
                content={<FormAddCard setModal={setCardModal} setUser={setUser} user={user} />}
                onClose={onClose}
            />
            <Title lv={2}>My Goals</Title>
            {user.goals.length === 0 ? (
                <div>
                    <p>You don't have any goals in this app. Click below to add</p>
                    <Button color="default">Add Goals +</Button>
                </div>
            ) : (
                user.goals.map((goal: IGoals) => (
                    <div key={goal.to}>{goal.title}</div> // Пример рендеринга карточек
                ))
            )}
        </div>
    );
};

const FormAddCard = ({ user, setUser, setModal }) => {
    const nameCardValue = useInput()
    const numberCardVal = useInput()
    const dateCard = useInput()
    const ownerCard = useInput();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!nameCardValue.value || !numberCardVal.value || !dateCard.value || !ownerCard.value) {
            alert('Please fill in all fields');
            return;
        }

        const newCard: ICard = {
            id: Date.now(),
            nameCard: nameCardValue.value,
            numberCard: Number(numberCardVal.value),
            dateCard: dateCard.value,
            ownerCard: ownerCard.value,
            balanceCard: 0,
        }

        setUser({
            ...user,
            cards: [...user.cards, newCard]
        })

        nameCardValue.reset()
        numberCardVal.reset()
        dateCard.reset()
        ownerCard.reset()

        setModal(false)
    }


    return (
        <>
            <form onSubmit={handleSubmit} className={styles.formAddCard} action="">
                <Input value={nameCardValue.value} onChange={nameCardValue.onChange} placeholder='Name Card' />
                <Input value={numberCardVal.value} onChange={numberCardVal.onChange} placeholder='Number Card' />
                <Input value={dateCard.value} onChange={dateCard.onChange} placeholder='Date Card' />
                <Input value={ownerCard.value} onChange={ownerCard.onChange} placeholder='Owner Card' />
                <Button color='primary'>Add new card</Button>
            </form>
        </>
    )
}

export default Main
