import { FC } from "react";
import Button from "../../components/UI/Button/Button";

interface ExpensesProps {
    
}
 
const Expenses: FC<ExpensesProps> = () => {
    return (
        <>
            <p>There is no expenses</p>
            <Button color="default">Add Expenses +</Button>
        </>
    );
}
 
export default Expenses;