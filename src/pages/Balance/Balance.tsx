import { FC } from "react";
import { IUser } from "../../types/user";
import HeaderBalance from "../../components/Header/HeaderBalance";
import { Outlet } from "react-router-dom";

interface BalanceProps {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

const Balance: FC<BalanceProps> = () => {
    return (
        <div className="container">
           <HeaderBalance />
           <Outlet />
        </div>
    );
}

export default Balance;