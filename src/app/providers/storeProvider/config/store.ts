import { profileReducer } from "@/features/editableProfileCard";
import { loginReducer } from "@/features/loginByEmail";
import { registrationReducer } from "@/features/registrNewUser";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        login: loginReducer,
        registration: registrationReducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
