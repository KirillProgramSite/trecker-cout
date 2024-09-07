import React from "react";
import { IGoals, IUser } from "../../types/user";
import styles from './GoalElement.module.css'
import Title from "../UI/Title/Title";

interface GoalElementProps {
  goal: IGoals;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
//   setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const GoalElement: React.FC<GoalElementProps> = ({ goal, setUser }) => {
  
  return (
    <div className={styles.goal}>
        <Title lv={3}>{goal.title}</Title>
        <progress max={goal.to} value={goal.total}/>
        <p>{goal.total} / {goal.to} rubles accumulated</p>
    </div>
  );
};

export default GoalElement;
