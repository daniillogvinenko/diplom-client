import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Tab.module.scss";
import { Text } from "../Text";
import { ReactNode } from "react";
import closeIcon from "@/shared/assets/images/menu-page/closeIcon.svg";

interface TabProps {
    className?: string;
    children: ReactNode;
    selected?: boolean;
    onClick?: () => void;
}

export const Tab = ({ className, children, selected, onClick }: TabProps) => {
    return (
        <div onClick={onClick} className={classNames(cls.Tab, { [cls.selected]: selected }, [className])}>
            <Text tagType="p" textType="text">
                {children}
            </Text>
            {selected ? <img src={closeIcon} alt="" /> : null}
        </div>
    );
};
