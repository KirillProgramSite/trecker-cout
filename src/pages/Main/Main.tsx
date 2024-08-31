import React, { useState } from 'react';

import Button from "../../components/UI/Button/Button";
// import Chart from "../../components/Chart";
import Title from "../../components/UI/Title/Title";

// import useInput from "../../hook/useInput"

import { ICard, IGoals, IUser } from "../../types/user";
import Modal from '../../components/UI/Modal/Modal,';


// import styles from './Main.module.css'
import CardForm from '../../components/CardModal';
import CardElement from '../../components/CardElement/CardElement';


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
                    <div style={{display: 'flex', flexWrap: "wrap"}}>
                        {user.cards.map((card: ICard) => (
                            <CardElement key={card.id} user={user} setUser={setUser} card={card} />
                        ))}
                    </div>

            )}

            <Button onClick={() => setCardModal(true)} color="default">Add Card +</Button>

            <Modal
                visible={cardModal}
                title='Add card in your profile'
                content={<CardForm setModal={setCardModal} setUser={setUser} user={user} />}
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
export default Main
