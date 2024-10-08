import styles from './Input.module.css';

type InputProps = {
    placeholder?: string;
    type?: string;
    value: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({placeholder, value, onChange, type}) => {
    return <input value={value} placeholder={placeholder} onChange={onChange} type={type} className={styles.myInput} />
}

export default Input;