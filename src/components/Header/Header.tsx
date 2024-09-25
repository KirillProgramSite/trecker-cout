import React, { FC } from 'react'
import Title from '../UI/Title/Title'
import { Link } from 'react-router-dom'
import { IUser } from '../../types/user'

interface HeaderProps {
    user: IUser
}
 
const Header: FC<HeaderProps> = ({user}) => {
    return (
        <>
            <Title lv={1}>Welcome CoinsTrack, {user.name}</Title>
            <Link to="/balance/income">Go balance</Link>
        </>
    )
}
 
export default Header;