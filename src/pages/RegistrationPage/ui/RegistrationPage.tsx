import { NavLink, Navigate } from "react-router-dom";
import cls from "./RegistrationPage.module.scss";
import LogoImg from "@/shared/assets/images/main-page/Logo.svg";
import { Text } from "@/shared/ui/Text";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import ModalCloseIcon from "@/shared/assets/images/menu-page/modalClose.svg";
import { useSelector } from "react-redux";
import {
    getRegistrationConfirmPassword,
    getRegistrationError,
    getRegistrationIsLoading,
    getRegistrationPassword,
    getRegistrationUsername,
    registrNewUser,
    registrationActions,
} from "@/features/registrNewUser";
import { Footer } from "@/widgets/Footer";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { validateRegistration } from "@/shared/lib/validation/validation";
import { useCallback, useEffect } from "react";
import { LOCALSTORAGE_USER } from "@/shared/const/localStorage";
import { getProfileAuthorized } from "@/features/editableProfileCard";
import { Skeleton } from "@/shared/ui/Skeleton";

export const RegistrationPage = () => {
    const username = useSelector(getRegistrationUsername);
    const password = useSelector(getRegistrationPassword);
    const confirmPassword = useSelector(getRegistrationConfirmPassword);
    const isLoading = useSelector(getRegistrationIsLoading);
    const error = useSelector(getRegistrationError);

    const dispatch = useAppDispatch();

    const onUsernameChange = (value: string) => {
        dispatch(registrationActions.setUsernameInput(value));
    };
    const onPasswordChange = (value: string) => {
        dispatch(registrationActions.setPasswordInput(value));
    };
    const onConfirmPasswordChange = (value: string) => {
        dispatch(registrationActions.setConfirmPasswordInput(value));
    };

    const onRegistrate = useCallback(() => {
        if (validateRegistration(username, password, confirmPassword) !== undefined) {
            // @ts-expect-error 123
            dispatch(registrationActions.setError(validateRegistration(username, password, confirmPassword)));
        } else {
            dispatch(registrNewUser(username, password));
        }
    }, [dispatch, password, confirmPassword, username]);

    const onEnterHandler = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                onRegistrate();
            }
        },
        [onRegistrate]
    );

    useEffect(() => {
        window.addEventListener("keydown", onEnterHandler);

        return () => {
            window.removeEventListener("keydown", onEnterHandler);
        };
    }, [onEnterHandler]);

    useEffect(() => {
        dispatch(registrationActions.setUsernameInput(""));
        dispatch(registrationActions.setPasswordInput(""));
        dispatch(registrationActions.setConfirmPasswordInput(""));
        dispatch(registrationActions.setError(""));
    }, []);

    // редирект на главную после успешной авторизации
    const authorized = useSelector(getProfileAuthorized);
    if (authorized) return <Navigate to="/" />;

    // не позволяем пользователю зоходить на страницу авторизации, если он уже авторизован
    if (localStorage.getItem(LOCALSTORAGE_USER)) {
        return <Navigate to={"/"} />;
    }

    return (
        <div className={cls.RegistrationPage}>
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
                                    Зарегистрироваться
                                </Text>
                                <NavLink to="/">
                                    <img className={cls.closeBtn} src={ModalCloseIcon} alt="" />
                                </NavLink>
                            </div>
                            <Skeleton className={cls.input} border="21px" height={60} width="100%" />
                            <Skeleton className={cls.input} border="21px" height={60} width="100%" />
                            <Skeleton className={cls.input} border="21px" height={60} width="100%" />

                            <Skeleton border="60px" width="100%" height={44} />
                        </>
                    ) : (
                        <>
                            <div className={cls.modalHeader}>
                                <Text textType="modalH1" tagType="h1">
                                    Регистрация
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
                                value={username}
                                onChange={onUsernameChange}
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
                            <Input
                                className={cls.input}
                                fullWidth
                                type="password"
                                value={confirmPassword}
                                onChange={onConfirmPasswordChange}
                                label="Подтвердите пароль"
                                placeholder="Подтвердите пароль"
                            />
                            <Button className={cls.button} onClick={onRegistrate} fullWidth>
                                Зарегистрироваться
                            </Button>
                            <Text tagType="span" textType="text">
                                Есть аккаунт?{" "}
                                <NavLink to="/login">
                                    <Text color="accent" tagType="span" textType="text">
                                        Войти
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
