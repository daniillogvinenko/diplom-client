import { Profile } from "@/entities/profile";

export interface ProfileCardSchema {
    // "настоящее" значение
    data?: Profile;
    // это то, что изменяет пользователь и при нажатии "отменить" эти значения пропадут
    form?: Profile;
    readonly?: boolean;
    isLoading?: boolean;

    authorized: boolean;
}
