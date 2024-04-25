import { useEffect } from "react";
import { AppRouter } from "./router";
import { initProfileData } from "@/features/editableProfileCard";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initProfileData);
    }, []);

    return (
        <>
            <AppRouter />
        </>
    );
}

export default App;
