import React, { useState } from 'react';

import Button from "../../components/UI/Button/Button";
// import Chart from "../../components/Chart";
import Title from "../../components/UI/Title/Title";

// import useInput from "../../hook/useInput"

import { ICard, IGoals } from "../../types/user";
import Modal from '../../components/UI/Modal/Modal,';


// import styles from './Main.module.css'
import CardForm from '../../components/Modal/CardModal';
import CardElement from '../../components/CardElement/CardElement';
import GoalElement from '../../components/GoalElement/GoalElement';
// import Input from '../../components/UI/Input/Input';
import { IProps } from '../../types/props';
import GoalsForm from '../../components/Modal/GoalsForm';


// const GoalsForm: React.FC<ModalProps> = ({ user, setUser, setModal }) => {
//     const titleVal = useInput();
//     const toVal = useInput();

//     const handleSubmit = (event: React.FormEvent) => {
//         event.preventDefault();

//         if (!titleVal.value || !titleVal.value) {
//             alert("Please fill in all fields");
//             return;
//         }


//         const newGoal: IGoals = {
//             id: Date.now(),
//             title: titleVal.value,
//             to: Number(toVal.value),
//             total: 0,
//         }

//         setUser({
//             ...user,
//             goals: [...user.goals, newGoal],
//         });

//         titleVal.reset();
//         toVal.reset();

//         setModal(false);
//     };

//     return (
//         <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit} className="formAddCard">
//             <Input value={titleVal.value} onChange={titleVal.onChange} placeholder="Enter name your title goal" />
//             <p>How much do you need to save to reach your goal?</p>
//             <Input value={toVal.value} onChange={toVal.onChange} placeholder="1000" />
//             <Button color="primary">Add new card</Button>
//         </form>
//     );
// }

const Main: React.FC<IProps> = ({ user, setUser }) => {

    const [cardModal, setCardModal] = useState<boolean>(false);
    const [goalModal, setGoalModal] = useState<boolean>(false);
    const onClose = () => setCardModal(false)
    const onCloseGoal = () => setGoalModal(false)



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
    );
};
export default Main
