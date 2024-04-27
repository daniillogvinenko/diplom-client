import { NavLink } from "react-router-dom";
import { Text } from "../Text";
import leftArrowIcon from "@/shared/assets/images/common/leftArrow.png";
import cls from "./BackLink.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface BackLinkProps {
    to: string;
    text: string;
    className?: string;
}

export const BackLink = ({ className, to, text }: BackLinkProps) => {
    return (
        <NavLink className={classNames(cls.BackLink, {}, [className])} to={to}>
            <div className={cls.flex}>
                <img src={leftArrowIcon} alt="" />
                <Text className={cls.text} tagType="span" textType="text">
                    {text}
                </Text>
            </div>
        </NavLink>
    );
};
