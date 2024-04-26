import { profileReducer } from "@/features/editableProfileCard";
import { loginReducer } from "@/features/loginByEmail";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        login: loginReducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
