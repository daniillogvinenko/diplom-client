import cls from "./Header.module.scss";
import appLogo from "@/shared/assets/images/main-page/Logo.svg";
import authIcon from "@/shared/assets/images/main-page/AuthIcon.png";
import cartIcon from "@/shared/assets/images/main-page/cartIcon.png";
import { Text } from "@/shared/ui/Text";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className={cls.Header}>
            <div className="container">
                <div className={cls.flex}>
                    <NavLink to="/">
                        <div className={cls.imgWrapper}>
                            <img src={appLogo} alt="" />
                        </div>
                    </NavLink>
                    <div className={cls.right}>
                        <NavLink to="/menu">
                            <Text tagType="span" textType="text">
                                Меню
                            </Text>
                        </NavLink>
                        <NavLink to="/about">
                            <Text tagType="span" textType="text">
                                О нас
                            </Text>
                        </NavLink>
                        <NavLink to="/master-classes">
                            <Text tagType="span" textType="text">
                                Мастер-классы
                            </Text>
                        </NavLink>
                        <nav className={cls.authBtn}>
                            <img src={authIcon} alt="" />
                        </nav>
                        <nav className={cls.cartWrapper}>
                            <img src={cartIcon} alt="" />
                            <div className={cls.cartSeparator}></div>
                            <div>
                                <div>1 158 Р.</div>
                                <div>2 шт.</div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};
