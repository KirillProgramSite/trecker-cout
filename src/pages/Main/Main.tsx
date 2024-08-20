import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input"
import Title from "../../components/UI/Title/Title";
import useInput from "../../hook/useInput"
import styles from './Main.module.css'
import { IUser } from "../../types/user";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Main = () => {
    return (
        <>
            <div className="container">
               <Title lv={1}>Welcom CoinsTreck</Title>
            </div>
        </>
    )
}
export default Main
