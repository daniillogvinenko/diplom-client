import { classNames } from "@/shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./Button.module.scss";
import { Text } from "../../Text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "outline" | "normal";
    fullWidth?: boolean;
}

export const Button = (props: ButtonProps) => {
    const { children, fullWidth, variant = "normal", ...otherProps } = props;
    return (
        <button className={classNames(cls.Button, { [cls.fullWidth]: fullWidth }, [cls[variant]])} {...otherProps}>
            <Text tagType="span" textType="button">
                {children}
            </Text>
        </button>
    );
};
