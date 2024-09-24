import React, { useState } from "react";
import { IGoals, IUser } from "../../types/user";
import styles from './GoalElement.module.css'
import Title from "../UI/Title/Title";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal,";
import AddMoneyForm from "../Modal/AddMoneyForm";

interface GoalElementProps {
  goal: IGoals;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  user: IUser;
  //   setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const GoalElement: React.FC<GoalElementProps> = ({ user ,goal, setUser }) => {

  const [addMoneyModal, setAddMoneyModal] = useState<boolean>(false);
  const closeModal = () => setAddMoneyModal(false);
  

  return (
    <>
      <Modal
        visible={addMoneyModal}
        title='Add money goal'
        content={<AddMoneyForm user={user} goal={goal} setUser={setUser} setModal={setAddMoneyModal} />}
        onClose={closeModal}
      />
      <div className={styles.goal}>
        <Title lv={3}>{goal.title}</Title>
        <progress className={styles.goalProgress} max={goal.to} value={goal.total} />
        <p>{goal.total} / {goal.to} rubles accumulated</p>
        <Button color="primary" onClick={() => setAddMoneyModal(true)}>Add money+</Button>
      </div>
    </>
  );
};

export default GoalElement;
