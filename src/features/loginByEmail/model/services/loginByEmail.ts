import { AppDispatch } from "@/app/providers/storeProvider";
import { Profile } from "@/entities/profile";
import { profileActions } from "@/features/editableProfileCard";
import { LOCALSTORAGE_USER } from "@/shared/const/localStorage";
import axios from "axios";
import { loginActions } from "../slices/loginSlice";

export const loginByEmail = (email: string, password: string) => (dispatch: AppDispatch) => {
    dispatch(loginActions.setIsLoading(true));
    dispatch(loginActions.setError(""));
    axios
        .post<Profile>(`${_API_}/login`, { email, password })
        .then((response) => {
            dispatch(loginActions.setIsLoading(false));
            dispatch(profileActions.initProfileData(response.data));
            // @ts-expect-error 123
            localStorage.setItem(LOCALSTORAGE_USER, response.data.id);
        })
        .catch((error) => {
            dispatch(loginActions.setIsLoading(false));
            dispatch(loginActions.setError(error.response.data.message));
        });
};
