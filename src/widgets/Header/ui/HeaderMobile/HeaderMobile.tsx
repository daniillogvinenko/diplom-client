import { AnimatePresence, motion } from "framer-motion";
import cls from "./HeaderMobile.module.scss";
import { useState } from "react";
import closeBurgerIcon from "@/shared/assets/images/common/closeBurger.svg";
import { NavLink } from "react-router-dom";
import { itemAmountByCart, totalByCart } from "@/shared/lib/totalByCart/totalByCart";
import cartIcon from "@/shared/assets/images/main-page/cartIcon.png";
import openMenuIcon from "@/shared/assets/images/common/openMenu.svg";
import logoImg from "@/shared/assets/images/main-page/Logo.svg";
import { Text } from "@/shared/ui/Text";
import authIcon from "@/shared/assets/images/main-page/AuthIcon.png";

const navLinks: { title: string; href: string }[] = [
    {
        title: "Меню",
        href: "/menu",
    },
    {
        title: "О нас",
        href: "/about",
    },
    {
        title: "Мастер-классы",
        href: "/master-classes",
    },
    {
        title: "Личный кабинет",
        href: "/profile",
    },
];

interface HeaderMobileProps {
    authorized: boolean;
    cart: Record<string, string>;
}

export const HeaderMobile = ({ authorized, cart }: HeaderMobileProps) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setOpen((prev) => !prev);
    };

    const menuVariants = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const linkVariants = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1],
            },
        },
        open: {
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0, 0.55, 0.45, 1],
            },
        },
    };

    const linkContainerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };

    return (
        <header className={cls.HeaderMobile}>
            <div className={cls.openBtn}>
                <div className="container">
                    <div className={cls.flex}>
                        <img onClick={toggleMenu} className={cls.burger} src={openMenuIcon} alt="" />
                        <NavLink to="/">
                            <img className={cls.logo} src={logoImg} alt="" />
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
                        ) : (
                            <NavLink to="/profile" className={cls.authBtn}>
                                <img src={authIcon} alt="" />{" "}
                                <Text className={cls.signUpText} tagType="span" textType="text">
                                    Войти
                                </Text>
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className={cls.wrapper}
                    >
                        <div className={cls.flexCol}>
                            <div className="container">
                                <div className={cls.menuHeader} onClick={toggleMenu}>
                                    <img src={closeBurgerIcon} alt="" />
                                </div>
                            </div>
                            <motion.div
                                variants={linkContainerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className={cls.links}
                            >
                                {navLinks.map((link, index) => (
                                    <div onClick={toggleMenu} key={index} className={cls.linkWrapper}>
                                        <motion.div variants={linkVariants}>
                                            <NavLink className={cls.linkItem} to={link.href}>
                                                <Text tagType="h3" textType="h3">
                                                    {link.title}
                                                </Text>
                                            </NavLink>
                                        </motion.div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
