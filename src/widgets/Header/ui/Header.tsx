import cls from "./Header.module.scss";
import appLogo from "@/shared/assets/images/main-page/Logo.svg";
import authIcon from "@/shared/assets/images/main-page/AuthIcon.png";
import cartIcon from "@/shared/assets/images/main-page/cartIcon.png";
import { Text } from "@/shared/ui/Text";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProfileData } from "@/features/editableProfileCard";
import { totalByCart } from "@/shared/lib/totalByCart/totalByCart";

export const Header = () => {
    const { cart } = useSelector(getProfileData);

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
                        <NavLink to="/profile" className={cls.authBtn}>
                            <img src={authIcon} alt="" />
                        </NavLink>
                        <NavLink to="/cart" className={cls.cartWrapper}>
                            <img src={cartIcon} alt="" />
                            <div className={cls.cartSeparator}></div>
                            <div>
                                <div>{totalByCart(cart)}</div>
                                <div>2 шт.</div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};
