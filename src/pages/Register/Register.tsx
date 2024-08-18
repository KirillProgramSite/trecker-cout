import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input"
import Title from "../../components/UI/Title/Title";
import useInput from "../../hook/useInput"
import styles from './Register.module.css'
import { IUser } from "../../types/user";
import { useNavigate } from "react-router-dom";



interface RegisterProps {
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

const Register = ({ setUser }: RegisterProps) => {
    const navigate = useNavigate();

    const nameVal = useInput();
    const surnameVal = useInput();
    const emailVal = useInput();
    const passwordVal = useInput();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); 

        if (!nameVal.value || !surnameVal.value || !emailVal.value || !passwordVal.value) {
            alert('Please fill in all fields');
            return;
        } else {
            setUser(prevUser => ({
                ...prevUser,
                name: nameVal.value || '',
                surname: surnameVal.value || '',
                email: emailVal.value || '',
                password: passwordVal.value || '',
                cards: prevUser.cards,
                goals: prevUser.goals,
                income: prevUser.income,
                expenses: prevUser.expenses
            }));

            nameVal.reset();
            surnameVal.reset();
            emailVal.reset();
            passwordVal.reset();

            navigate('/welcome');
        }

    }


    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className={styles.wrapper}>
                        <Title lv={1}>Welcome в CoinsTreck</Title>

                        <Input value={nameVal.value} onChange={nameVal.onChange} placeholder="Enter your name" />
                        <Input value={surnameVal.value} onChange={surnameVal.onChange} placeholder="Enter your surname" />
                        <Input value={emailVal.value} onChange={emailVal.onChange} placeholder="Enter your email" type="email" />
                        <Input value={passwordVal.value} onChange={passwordVal.onChange} placeholder="Enter your password" type="password" />


                        <Button color="default">Зарегистривоваться</Button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Register
