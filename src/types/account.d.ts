export interface Account {
    id: number;
    name: string;
    owner: string;
    created_at: Date;
    updated_at: Date;
}

export type Accounts = AccountInterface[];
