import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProfileCardSchema, ProfileForm } from "../types/editableProfileCardSchema";
import { Profile } from "@/entities/profile";

const initialState: ProfileCardSchema = {
    data: {
        address: "",
        email: "",
        firstname: "",
        phoneNumber: "",
        id: "",
        cart: {},
    },
    form: {
        address: "",
        firstname: "",
        phoneNumber: "",
    },
    readonly: true,
    isLoading: false,
    cartIsUpdating: false,
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
        setCartIsUpdating: (state, action: PayloadAction<boolean>) => {
            state.cartIsUpdating = action.payload;
        },
        cancelEdit: (state) => {
            state.form!.address = state.data?.address;
            state.form!.firstname = state.data?.firstname;
            state.form!.phoneNumber = state.data?.phoneNumber;
            state.readonly = true;
        },
        updateProfileForm: (state, action: PayloadAction<ProfileForm>) => {
            state.form = { ...state.form, ...action.payload };
        },
        initProfileData: (state, action: PayloadAction<Profile>) => {
            state.data!.address = action.payload.address;
            state.data!.cart = action.payload.cart;
            state.data!.email = action.payload.email;
            state.data!.firstname = action.payload.firstname;
            state.data!.id = action.payload.id;
            state.data!.phoneNumber = action.payload.phoneNumber;

            state.form = {
                address: action.payload.address,
                firstname: action.payload.firstname,
                phoneNumber: action.payload.phoneNumber,
            };
            state.authorized = true;
        },
        signOut: (state) => {
            (state.data = {
                address: "",
                email: "",
                firstname: "",
                phoneNumber: "",
                id: "",
                cart: {},
            }),
                (state.form = {
                    address: "",
                    firstname: "",
                    phoneNumber: "",
                }),
                (state.authorized = false);
        },
        updateCart: (state, action: PayloadAction<Record<string, string>>) => {
            state.data.cart = action.payload;
        },
    },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
