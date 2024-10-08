export interface ICard{
    id: number;
    nameCard: string;
    numberCard: string;
    dateCard: string;
    ownerCard: string;
    balanceCard: number;
}

export interface IGoals{
    id: number;
    title: string;
    to: number;
    total: number;
}

export interface IBalance{
    id: number;
    name: string;
    category: string; // TODO: enum Category;
    count: number;
    card: ICard;
}


export interface IUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    cards: ICard[];
    goals: IGoals[];
    income: IBalance[];
    expenses:IBalance[];
}
