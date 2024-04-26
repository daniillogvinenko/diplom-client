export interface Profile {
    id?: string;
    firstname?: string;
    phoneNumber?: string;
    email?: string;
    address?: string;
    cart: Record<string, string>;
}
