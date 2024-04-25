import { useEffect } from "react";
import { AppRouter } from "./router";
import { initProfileData } from "@/features/editableProfileCard";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { LOCALSTORAGE_USER } from "@/shared/const/localStorage";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const userId = localStorage.getItem(LOCALSTORAGE_USER);

        // запрос произойдет только если пользователь авторизован
        if (userId) {
            dispatch(initProfileData(userId));
        }
    }, []);

    return (
        <>
            <AppRouter />
        </>
    );
}

export default App;
