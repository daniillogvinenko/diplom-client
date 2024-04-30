import { RootState } from "@/app/providers/storeProvider/config/store";

export const getLoginEmail = (state: RootState) => state.login.email;
export const getLoginPassword = (state: RootState) => state.login.password;
export const getLoginIsLoading = (state: RootState) => state.login.isLoading;
export const getLoginError = (state: RootState) => state.login.error;
