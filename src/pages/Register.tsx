import { FC } from "react"
import Input from "../components/UI/Input/Input"
import useInput from "../hook/useInput"
import Button from "../components/UI/Button/Button";
import Title from "../components/UI/Title/Title";




const Register: FC = () => {
    const regVal = useInput();
    const regVal2 = useInput();

    return (
        <>
            <div className="container">
                <h1>Добро пожаловать в CoinsTreck</h1>

                <Input value={regVal.value} onChange={regVal.onChange} placeholder="Kirill" />
                <Input value={regVal2.value} onChange={regVal2.onChange} placeholder="Kirill" />
            </div>

            <Button color="default">Hello world</Button>
            <Button color="primary">Hello world</Button>
            <Button color="danger">Hello world</Button>
            <Button color="warning">Hello world</Button>

            <Title lv={1}>Hello</Title>
        </>
    )
}
export default Register
