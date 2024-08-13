interface ICard{
    nameCard: string;
    numberCard: number;
    dateCard: string;
    ownerCard: string;
    balanceCard: number;
}

interface IGoals{
    title: string;
    to: number | null;
    from: number;
}

interface IBalance{
    name: string;
    category: string; // TODO: enum Category;
    count: number;
    card: ICard;
}


export interface IUser {
    name: string;
    surname:string;
    cards: ICard | [];
    goals: IGoals;
    income: IBalance;
    expenses:IBalance;
}