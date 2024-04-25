import { getProfileAuthorized } from "@/features/editableProfileCard";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface RequireAuthProps {
    children: ReactNode;
}

// редирект на /login если пользователь не авторизован
export const RequireAuth = ({ children }: RequireAuthProps) => {
    const isAuthorized = useSelector(getProfileAuthorized);

    if (!isAuthorized) {
        return <Navigate to={"/"} />;
    }

    return children;
};
