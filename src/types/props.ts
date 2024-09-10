import { ICard, IUser } from "./user";

export interface IProps{
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

export interface CardElementProps extends IProps{
    card: ICard;
} 

export interface ModalProps extends IProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}