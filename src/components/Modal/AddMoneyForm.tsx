import React from "react";
import { IGoals, IUser } from "../../types/user";
import useInput from "../../hook/useInput";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

interface CardFormProps {
  goal: IGoals;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser;
}

const AddMoneyForm: React.FC<CardFormProps> = ({ user, goal, setUser, setModal }) => {
    const totalVal = useInput(""); // Изначально поле пустое
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      
      const addAmount = parseFloat(totalVal.value);

      if (isNaN(addAmount)) return;

      const editGoal: IGoals = {
        id: goal.id,
        title: goal.title,
        to: goal.to,
        total: goal.total + addAmount, 
      };
  
      setUser((prevUser: IUser) => ({
        ...prevUser,
        goals: prevUser.goals.map((g: IGoals) => (g.id === goal.id ? editGoal : g)),
      }));
      
      setModal(false);  
    };

    const deleteGoal = () => {
      const delGoal:IGoals[] = user.goals.filter((g) => g.id !== goal.id);
      setUser({
        ...user,
        goals: delGoal,
      })
    }

  return (
    <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit} className="formAddGoal">
      <Input value={totalVal.value} onChange={totalVal.onChange} placeholder="Add Amount" />
      <Button color="primary">Add Money</Button>
      <Button color="danger" onClick={() => deleteGoal()}>Delete Goal</Button>
    </form>
  );
};

export default AddMoneyForm;
