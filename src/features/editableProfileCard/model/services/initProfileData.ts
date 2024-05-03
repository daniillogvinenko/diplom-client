import { AppDispatch } from "@/app/providers/storeProvider";
import { Profile } from "@/entities/profile";
import axios from "axios";
import { profileActions } from "../slice/profileSlice";
import { LOCALSTORAGE_USER } from "@/shared/const/localStorage";

export const initProfileData = (id: string) => (dispatch: AppDispatch) => {
    dispatch(profileActions.setIsLoading(true));
    axios
        .get<Profile>(`${_API_}/profiles/${id}`)
        .then((response) => {
            dispatch(profileActions.initProfileData(response.data));
            dispatch(profileActions.setIsLoading(false));
        })
        .catch(() => {
            localStorage.removeItem(LOCALSTORAGE_USER);
        });
};
