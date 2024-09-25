import React, { useState } from 'react';

import Button from "../../components/UI/Button/Button";
import Title from "../../components/UI/Title/Title";
import { ICard, IGoals } from "../../types/user";
import Modal from '../../components/UI/Modal/Modal,';
import CardForm from '../../components/Modal/CardModal';
import CardElement from '../../components/CardElement/CardElement';
import GoalElement from '../../components/GoalElement/GoalElement';
import { IProps } from '../../types/props';
import GoalsForm from '../../components/Modal/GoalsForm';
import Header from '../../components/Header/Header';


const Main: React.FC<IProps> = ({ user, setUser }) => {

    const [cardModal, setCardModal] = useState<boolean>(false);
    const [goalModal, setGoalModal] = useState<boolean>(false);
    const onClose = () => setCardModal(false)
    const onCloseGoal = () => setGoalModal(false)



    return (
        <div className="container">
            <Header user={user} />

            <div className="content">
            <Title lv={2}>Your Cards</Title>
            {user.cards.length === 0 ? (
                <div>
                    <p>You don't have any cards in this app. Click below to add</p>
                </div>
            ) : (
                <div style={{ display: 'flex', flexWrap: "wrap" }}>
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

            <Modal
                visible={goalModal}
                title='Add goal in your profile'
                content={<GoalsForm setModal={setGoalModal} setUser={setUser} user={user} />}
                onClose={onCloseGoal}
            />
            <Title lv={2}>My Goals</Title>
            {user.goals.length === 0 ? (
                <div>
                    <p>You don't have any goals in this app. Click below to add</p>
                </div>
            ) : (
                user.goals.map((goal: IGoals) => (
                    <GoalElement key={goal.id} user={user} goal={goal} setUser={setUser} />
                ))
            )}

            <Button onClick={() => setGoalModal(true)} color="default">Add Goals +</Button>
            </div>
        </div>
    );
};
export default Main
