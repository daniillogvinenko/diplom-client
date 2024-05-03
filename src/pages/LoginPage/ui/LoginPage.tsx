import { NavLink, Navigate } from "react-router-dom";
import cls from "./LoginPage.module.scss";
import LogoImg from "@/shared/assets/images/main-page/Logo.svg";
import { Text } from "@/shared/ui/Text";
import ModalCloseIcon from "@/shared/assets/images/menu-page/modalClose.svg";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { useSelector } from "react-redux";
import {
    getLoginEmail,
    getLoginError,
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
import { Footer } from "@/widgets/Footer";
import { validateAuthorization } from "@/shared/lib/validation/validation";

export const LoginPage = () => {
    const dispatch = useAppDispatch();

    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onEmailChange = (value: string) => dispatch(loginActions.setEmailInput(value));
    const onPasswordChange = (value: string) => dispatch(loginActions.setPasswordInput(value));

    const onLogin = useCallback(() => {
        if (validateAuthorization(email, password) !== undefined) {
            // @ts-expect-error 123
            dispatch(loginActions.setError(validateAuthorization(email, password)));
        } else {
            dispatch(loginByEmail(email, password));
        }
    }, [dispatch, email, password]);

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

    useEffect(() => {
        dispatch(loginActions.setEmailInput(""));
        dispatch(loginActions.setPasswordInput(""));
        dispatch(loginActions.setError(""));
    }, []);

    // редирект на главную после успешной авторизации
    const authorized = useSelector(getProfileAuthorized);
    if (authorized) return <Navigate to="/" />;

    // не позволяем пользователю зоходить на страницу авторизации, если он уже авторизован
    if (localStorage.getItem(LOCALSTORAGE_USER)) {
        return <Navigate to={"/"} />;
    }

    return (
        <div className={cls.LoginPage}>
            <header className={cls.header}>
                <NavLink to="/">
                    <img src={LogoImg} alt="" />
                </NavLink>
            </header>
            <div className="container">
                <div className={cls.wrapper}>
                    {isLoading ? (
                        <>
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
                        </>
                    ) : (
                        <>
                            <div className={cls.modalHeader}>
                                <Text textType="modalH1" tagType="h1">
                                    Вход в личный кабинет
                                </Text>
                                <NavLink to="/">
                                    <img className={cls.closeBtn} src={ModalCloseIcon} alt="" />
                                </NavLink>
                            </div>
                            <Text color="red" className={cls.error} tagType="p" textType="modalText">
                                {error}
                            </Text>
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
                            <Button className={cls.button} onClick={onLogin} fullWidth>
                                Продолжить
                            </Button>
                            <Text tagType="span" textType="text">
                                Нет аккаунта?{" "}
                                <NavLink to="/registration">
                                    <Text color="accent" tagType="span" textType="text">
                                        Зарегистрироваться
                                    </Text>
                                </NavLink>
                            </Text>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};
