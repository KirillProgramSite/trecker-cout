import React from 'react';
import styles from './Button.module.css';


type ButtonProps = {
   color: "default" | "primary" | "danger" | "warning";
   onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
   children: React.ReactNode;
}

const Button = ({ color, onClick, children }: ButtonProps) => {
    const className = styles[color]; // Динамически выбираем класс по значению color

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;