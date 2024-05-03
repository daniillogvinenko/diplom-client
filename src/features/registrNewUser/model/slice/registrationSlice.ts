import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RegistrationSchema } from "../types/registrNewUserSchema";

const initialState: RegistrationSchema = {
    username: "",
    password: "",
    confirmPassword: "",
    isLoading: false,
    error: "",
};

export const registrationSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUsernameInput: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPasswordInput: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setConfirmPasswordInput: (state, action: PayloadAction<string>) => {
            state.confirmPassword = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
});

export const { actions: registrationActions, reducer: registrationReducer } = registrationSlice;
