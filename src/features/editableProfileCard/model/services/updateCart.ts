import { AppDispatch } from "@/app/providers/storeProvider";
import { LOCALSTORAGE_USER } from "@/shared/const/localStorage";
import axios from "axios";
import { profileActions } from "../slice/profileSlice";
import { Profile } from "@/entities/profile";

// thunk для обновления корзины, получает новое состояние корзины
export const updateCart = (newCart: Record<string, string>) => (disaptch: AppDispatch) => {
    disaptch(profileActions.setCartIsUpdating(true));
    axios
        .patch<Profile>(`${_API_}/profiles/${localStorage.getItem(LOCALSTORAGE_USER)}`, { cart: newCart })
        .then((response) => {
            disaptch(profileActions.updateCart(response.data.cart));
            disaptch(profileActions.setCartIsUpdating(false));
        });
};
