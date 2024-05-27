import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./SmallTab.module.scss";
import { Text } from "../Text";
import { ReactNode } from "react";
import closeIcon from "@/shared/assets/images/menu-page/closeIcon.svg";

interface SmallTabProps {
    className?: string;
    children: ReactNode;
    selected?: boolean;
    onClick?: () => void;
}

export const SmallTab = ({ className, children, selected, onClick }: SmallTabProps) => {
    return (
        <div onClick={onClick} className={classNames(cls.SmallTab, { [cls.selected]: selected }, [className])}>
            <Text tagType="p" textType="modalText">
                {children}
            </Text>
            {selected ? <img src={closeIcon} alt="" /> : null}
        </div>
    );
};
