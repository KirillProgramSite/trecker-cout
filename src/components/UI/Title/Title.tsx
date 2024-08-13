import React from 'react';
import styles from './Title.module.css';


type TitleProps = {
    lv: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    textCenter?: boolean;
}

const Title = ({ children, lv, textCenter }: TitleProps) => {

    const Tag = `h${lv}` as keyof JSX.IntrinsicElements;
    const className = textCenter ? styles.textCenter : '';

    return <Tag className={className}>{children}</Tag>;
}

export default Title;