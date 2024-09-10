import React from 'react';
import { ModalProps } from '../types/props';
import Input from './UI/Input/Input';
import Button from './UI/Button/Button';
import { IGoals } from '../types/user';
import useInput from '../hook/useInput';

const GoalsForm: React.FC<ModalProps> = ({ user, setUser, setModal }) => {
    const titleVal = useInput();
    const toVal = useInput();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!titleVal.value || !titleVal.value) {
            alert("Please fill in all fields");
            return;
        }


        const newGoal: IGoals = {
            id: Date.now(),
            title: titleVal.value,
            to: Number(toVal.value),
            total: 0,
        }

        setUser({
            ...user,
            goals: [...user.goals, newGoal],
        });

        titleVal.reset();
        toVal.reset();

        setModal(false);
    };

    return (
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit} className="formAddCard">
            <Input value={titleVal.value} onChange={titleVal.onChange} placeholder="Enter name your title goal" />
            <p>How much do you need to save to reach your goal?</p>
            <Input value={toVal.value} onChange={toVal.onChange} placeholder="1000" />
            <Button color="primary">Add new card</Button>
        </form>
    );
}

export default GoalsForm;