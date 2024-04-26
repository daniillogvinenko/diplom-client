import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/loginByEmailSchema";

const initialState: LoginSchema = {
    email: "",
    password: "",
    isLoading: false,
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setEmailInput: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPasswordInput: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
