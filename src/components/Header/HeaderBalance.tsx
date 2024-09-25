import { Link } from "react-router-dom";
import Title from "../UI/Title/Title";
import { FC } from "react";

interface HeaderBalanceProps {

}

const HeaderBalance: FC<HeaderBalanceProps> = () => {
    return (
        <div style={{marginBottom: 100}}>
            <Title lv={1}>Welcome you balance: 1000$</Title>
            <Link to="/balance/income">Income</Link> / <Link to="/balance/expenses">Expenses</Link>
        </div>
    );
}

export default HeaderBalance;