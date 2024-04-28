import { NavLink, Navigate } from "react-router-dom";
import cls from "./LoginPage.module.scss";
import LogoImg from "@/shared/assets/images/login-page/Logo.svg";
import { Text } from "@/shared/ui/Text";
import ModalCloseIcon from "@/shared/assets/images/menu-page/modalClose.svg";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { useSelector } from "react-redux";
import {
    getLoginEmail,
    getLoginIsLoading,
    getLoginPassword,
    loginActions,
    loginByEmail,
} from "@/features/loginByEmail";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { LOCALSTORAGE_USER } from "@/shared/const/localStorage";
import { getProfileAuthorized } from "@/features/editableProfileCard";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useCallback, useEffect } from "react";

export const LoginPage = () => {
    const dispatch = useAppDispatch();

    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);

    const onEmailChange = (value: string) => dispatch(loginActions.setEmailInput(value));
    const onPasswordChange = (value: string) => dispatch(loginActions.setPasswordInput(value));

    const onLogin = useCallback(() => dispatch(loginByEmail(email, password)), [dispatch, email, password]);

    const onEnterHandler = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                onLogin();
            }
        },
        [onLogin]
    );

    useEffect(() => {
        window.addEventListener("keydown", onEnterHandler);
        return () => {
            window.removeEventListener("keydown", onEnterHandler);
        };
    }, [onEnterHandler]);

    // редирект на главную после успешной авторизации
    const authorized = useSelector(getProfileAuthorized);
    if (authorized) return <Navigate to="/" />;

    // не позволяем пользователю зоходить на страницу авторизации, если он уже авторизован
    if (localStorage.getItem(LOCALSTORAGE_USER)) {
        return <Navigate to={"/"} />;
    }

    if (isLoading) {
        return (
            <div>
                <header className={cls.header}>
                    <NavLink to="/">
                        <img src={LogoImg} alt="" />
                    </NavLink>
                </header>
                <div className={cls.wrapper}>
                    <div className={cls.modalHeader}>
                        <Text textType="modalH1" tagType="h1">
                            Вход в личный кабинет
                        </Text>
                        <NavLink to="/">
                            <img className={cls.closeBtn} src={ModalCloseIcon} alt="" />
                        </NavLink>
                    </div>
                    <Skeleton className={cls.input} border="21px" height={60} width="100%" />
                    <Skeleton className={cls.input} border="21px" height={60} width="100%" />

                    <Skeleton border="60px" width="100%" height={44} />
                </div>
            </div>
        );
    }

    return (
        <div>
            <header className={cls.header}>
                <NavLink to="/">
                    <img src={LogoImg} alt="" />
                </NavLink>
            </header>
            <div className={cls.wrapper}>
                <div className={cls.modalHeader}>
                    <Text textType="modalH1" tagType="h1">
                        Вход в личный кабинет
                    </Text>
                    <NavLink to="/">
                        <img className={cls.closeBtn} src={ModalCloseIcon} alt="" />
                    </NavLink>
                </div>
                <Input
                    className={cls.input}
                    fullWidth
                    value={email}
                    onChange={onEmailChange}
                    label="Логин"
                    placeholder="Логин"
                />
                <Input
                    className={cls.input}
                    fullWidth
                    type="password"
                    value={password}
                    onChange={onPasswordChange}
                    label="Пароль"
                    placeholder="Пароль"
                />
                <Button onClick={onLogin} fullWidth>
                    Продолжить
                </Button>
            </div>
        </div>
    );
};
