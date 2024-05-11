import { Text } from "@/shared/ui/Text";
import { NavLink } from "react-router-dom";
import cls from "./HeaderDesktop.module.scss";
import { itemAmountByCart, totalByCart } from "@/shared/lib/totalByCart/totalByCart";
import appLogo from "@/shared/assets/images/main-page/Logo.svg";
import authIcon from "@/shared/assets/images/main-page/AuthIcon.png";
import cartIcon from "@/shared/assets/images/main-page/cartIcon.png";

interface HeaderDesktopProps {
    authorized: boolean;
    cart: Record<string, string>;
}

export const HeaderDesktop = ({ authorized, cart }: HeaderDesktopProps) => {
    return (
        <header className={cls.HeaderDesktop}>
            <div className="container">
                <div className={cls.flex}>
                    <NavLink to="/">
                        <div className={cls.imgWrapper}>
                            <img src={appLogo} alt="" />
                        </div>
                    </NavLink>
                    <div className={cls.middle}>
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
                    </div>
                    <div className={cls.right}>
                        <NavLink to="/profile" className={cls.authBtn}>
                            <img src={authIcon} alt="" />{" "}
                            {authorized ? null : (
                                <Text className={cls.signUpText} tagType="span" textType="text">
                                    Войти
                                </Text>
                            )}
                        </NavLink>
                        {authorized ? (
                            <NavLink to="/cart" className={cls.cartWrapper}>
                                <img src={cartIcon} alt="" />
                                <div className={cls.cartSeparator}></div>
                                <div>
                                    <div>{totalByCart(cart)} Р.</div>
                                    <div>{itemAmountByCart(cart)} шт</div>
                                </div>
                            </NavLink>
                        ) : null}
                    </div>
                </div>
            </div>
        </header>
    );
};
