import { AppDispatch } from "@/app/providers/storeProvider";
import { Profile } from "@/entities/profile";
import axios from "axios";
import { profileActions } from "../slice/profileSlice";
import { ProfileForm } from "../types/editableProfileCardSchema";
import { LOCALSTORAGE_USER } from "@/shared/const/localStorage";

export const updateProfileData =
    ({ address, firstname, phoneNumber }: ProfileForm) =>
    (dispatch: AppDispatch) => {
        dispatch(profileActions.setIsLoading(true));
        axios
            .patch<Profile>(`${_API_}/profiles/${localStorage.getItem(LOCALSTORAGE_USER)}`, {
                address,
                firstname,
                phoneNumber,
            })
            .then((response) => {
                dispatch(profileActions.initProfileData(response.data));
                dispatch(profileActions.setReadonly(true));
                dispatch(profileActions.setIsLoading(false));
            })
            .catch(() => {
                dispatch(profileActions.setError("error"));
                dispatch(profileActions.setReadonly(true));
                dispatch(profileActions.setIsLoading(false));
            });
    };
