import { LOCALSTORAGE_USER } from "@/shared/const/localStorage";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface RequireAuthProps {
    children: ReactNode;
}

// редирект на /login если пользователь не авторизован
export const RequireAuth = ({ children }: RequireAuthProps) => {
    const isAuthorized = localStorage.getItem(LOCALSTORAGE_USER);

    if (!isAuthorized) {
        return <Navigate to={"/login"} />;
    }

    return children;
};
