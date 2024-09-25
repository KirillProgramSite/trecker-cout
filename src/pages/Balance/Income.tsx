import { FC } from "react";
import Button from "../../components/UI/Button/Button";

interface IncomeProps {
    
}
 
const Income: FC<IncomeProps> = () => {
    return (
        <>
            <p>There is no income</p>
            <Button color="default">Add Income +</Button>
        </>
    );
}
 
export default Income;