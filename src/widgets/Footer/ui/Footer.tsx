import { Text } from "@/shared/ui/Text";
import cls from "./Footer.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { NavLink } from "react-router-dom";
import logo from "@/shared/assets/images/footer/logoWhite.svg";

interface FooterProps {
    noMargin?: boolean;
    className?: string;
}

export const Footer = ({ noMargin, className }: FooterProps) => {
    return (
        <div className={classNames(cls.Footer, { [cls.noMargin]: noMargin }, [className])}>
            <div className="container">
                <div className={cls.flex}>
                    <img src={logo} alt="" />
                    <div className={cls.right}>
                        <div>
                            <NavLink to={"/delivery-info"}>
                                <Text color="white" textType="text" tagType="p">
                                    Условия доставки
                                </Text>
                            </NavLink>
                            <NavLink to={"/about"}>
                                <Text color="white" textType="text" tagType="p">
                                    О нас
                                </Text>
                            </NavLink>
                        </div>
                        <div>
                            <Text color="white" textType="text" tagType="p">
                                +7 999 999 99 99
                            </Text>
                            <Text color="white" textType="text" tagType="p">
                                наб. реки Мойки 84
                            </Text>
                            <Text color="white" textType="text" tagType="p">
                                addisflavorsfeedback@gmail.com
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
