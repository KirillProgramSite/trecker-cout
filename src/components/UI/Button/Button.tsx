import React from 'react';
import styles from './Button.module.css';


type ButtonProps = {
   color: "default" | "primary" | "danger" | "warning";
   onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
   children: React.ReactNode;
   type?: "submit" | "reset" | "button" | undefined;
}

const Button: React.FC<ButtonProps> = ({ color, onClick, children, type }) => {
    const className = styles[color]; // Динамически выбираем класс по значению color

    return (
        <button className={className} onClick={onClick} type={type}>
            {children}
        </button>
    );
}

export default Button;