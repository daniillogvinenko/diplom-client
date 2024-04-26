import { NavLink } from "react-router-dom";
import cls from "./LoginPage.module.scss";
import LogoImg from "@/shared/assets/images/login-page/Logo.svg";
import { Text } from "@/shared/ui/Text";
import ModalCloseIcon from "@/shared/assets/images/menu-page/modalClose.svg";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { useSelector } from "react-redux";
import { getLoginEmail, getLoginPassword, loginActions, loginByEmail } from "@/features/loginByEmail";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

export const LoginPage = () => {
    const dispatch = useAppDispatch();

    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);

    const onEmailChange = (value: string) => dispatch(loginActions.setEmailInput(value));
    const onPasswordChange = (value: string) => dispatch(loginActions.setPasswordInput(value));

    const onLogin = () => dispatch(loginByEmail(email, password));

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
