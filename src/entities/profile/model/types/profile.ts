export interface Order {
    id: string;
    date: string;
    dishes: Record<string, string>;
}

export interface Profile {
    id?: string;
    firstname?: string;
    phoneNumber?: string;
    email?: string;
    address?: string;
    cart: Record<string, string>;
    orders: Order[];
}
