import { AppDispatch } from "@/app/providers/storeProvider";
import { Profile } from "@/entities/profile";
import { profileActions } from "@/features/editableProfileCard";
import axios from "axios";
import { registrationActions } from "../slice/registrationSlice";
import { LOCALSTORAGE_USER } from "@/shared/const/localStorage";

export const registrNewUser = (username: string, password: string) => (dispatch: AppDispatch) => {
    axios
        .post<Profile>(`${_API_}/registration`, { username, password })
        .then((response) => {
            dispatch(profileActions.initProfileData(response.data));
            // @ts-expect-error 123
            localStorage.setItem(LOCALSTORAGE_USER, response.data.id);
        })
        .catch((error) => {
            dispatch(registrationActions.setError(error.response.data.message));
        });
};
