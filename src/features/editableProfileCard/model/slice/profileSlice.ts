import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProfileCardSchema } from "../types/editableProfileCardSchema";
import { Profile } from "@/entities/profile";

const initialState: ProfileCardSchema = {
    data: {
        address: "",
        email: "",
        firstname: "",
        phoneNumber: "",
        id: "",
    },
    form: {
        address: "",
        email: "",
        firstname: "",
        phoneNumber: "",
        id: "",
    },
    readonly: true,
    isLoading: false,
    authorized: false,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        cancelEdit: (state) => {
            state.form = state.data;
            state.readonly = true;
        },
        updateProfileForm: (state, action: PayloadAction<Profile>) => {
            state.form = { ...state.form, ...action.payload };
        },
        initProfileData: (state, action: PayloadAction<Profile>) => {
            state.data = action.payload;
            state.form = action.payload;
            state.authorized = true;
        },
        signOut: (state) => {
            (state.data = {
                address: "",
                email: "",
                firstname: "",
                phoneNumber: "",
                id: "",
            }),
                (state.form = {
                    address: "",
                    email: "",
                    firstname: "",
                    phoneNumber: "",
                    id: "",
                }),
                (state.authorized = false);
        },
    },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
