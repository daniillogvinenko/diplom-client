import { AppDispatch } from "@/app/providers/storeProvider";
import { Profile } from "@/entities/profile";
import axios from "axios";
import { profileActions } from "../slice/profileSlice";

export const updateProfileData = (newProfileValue: Omit<Profile, "id">) => (dispatch: AppDispatch) => {
    dispatch(profileActions.setIsLoading(true));
    axios.patch<Profile>(`${_API_}/profiles/1`, { ...newProfileValue }).then((response) => {
        dispatch(profileActions.initProfileData(response.data));
        dispatch(profileActions.setReadonly(true));
        dispatch(profileActions.setIsLoading(false));
    });
};
