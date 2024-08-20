export interface ICard{
    nameCard: string;
    numberCard: number;
    dateCard: string;
    ownerCard: string;
    balanceCard: number;
}

export interface IGoals{
    title: string;
    to: number | null;
    from: number;
}

export interface IBalance{
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