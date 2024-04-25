import { RootState } from "@/app/providers/storeProvider/config/store";

export const getProfileReadonly = (state: RootState) => state.profile.readonly;
export const getProfileData = (state: RootState) => state.profile.data;
export const getProfileForm = (state: RootState) => state.profile.form;
export const getProfileIsLoading = (state: RootState) => state.profile.isLoading;
export const getProfileAuthorized = (state: RootState) => state.profile.authorized;
