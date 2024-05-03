import { RootState } from "@/app/providers/storeProvider/config/store";

export const getRegistrationUsername = (state: RootState) => state.registration.username;
export const getRegistrationPassword = (state: RootState) => state.registration.password;
export const getRegistrationConfirmPassword = (state: RootState) => state.registration.confirmPassword;
export const getRegistrationIsLoading = (state: RootState) => state.registration.isLoading;
export const getRegistrationError = (state: RootState) => state.registration.error;
