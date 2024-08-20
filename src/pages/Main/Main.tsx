import React from 'react';

import Button from "../../components/UI/Button/Button";
import Chart from "../../components/Chart";
// import Input from "../../components/UI/Input/Input"
import Title from "../../components/UI/Title/Title";

// import useInput from "../../hook/useInput"

import { ICard, IGoals, IUser } from "../../types/user";

// import styles from './Main.module.css'


interface MainProps {
    user: IUser; // Правильный тип пропсов
}

const Main: React.FC<MainProps> = ({ user }) => {
    return (
        <div className="container">
            <Title lv={1}>Welcome CoinsTrack, {user.name}</Title>
            <Title lv={2}>Budget chart (В разработке)</Title>
            {/* <Chart data={[user.expenses.count, user.goals.to, user.income.count]} /> */}
            <Title lv={2}>Your Cards</Title>
            {user.cards.length ? (
                <div>
                    <p>You don't have any cards in this app. Click below to add</p>
                    <Button color="default">Add Card +</Button>
                </div>
            ) : (
                user.cards.map((card:ICard) => (
                    <div key={card.ownerCard}>{card.nameCard}</div> // Пример рендеринга карточек
                ))
            )}
            <Title lv={2}>My Goals</Title>
            {user.goals.length ? (
                <div>
                    <p>You don't have any goals in this app. Click below to add</p>
                    <Button color="default">Add Goals +</Button>
                </div>
            ) : (
                user.goals.map((goal:IGoals) => (
                    <div key={goal.to}>{goal.title}</div> // Пример рендеринга карточек
                ))
            )}
        </div>
    );
};

export default Main
