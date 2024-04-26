import { Profile } from "@/entities/profile";

export type ProfileForm = Omit<Profile, "id" | "email" | "cart">;

export interface ProfileCardSchema {
    // "настоящее" значение
    data: Profile;
    // это то, что изменяет пользователь и при нажатии "отменить" эти значения пропадут
    form: ProfileForm;
    readonly: boolean;
    isLoading: boolean;
    cartIsUpdating: boolean;
    authorized: boolean;
}
