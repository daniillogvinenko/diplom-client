import { ReactNode } from "react";
import cls from "./Text.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface TextProps {
    children: ReactNode;
    textType:
        | "pageTitle"
        | "marquee"
        | "h1"
        | "h2"
        | "h3"
        | "text"
        | "button"
        | "inputText"
        | "inputLabel"
        | "cardHeader"
        | "cardPrice"
        | "modalH1"
        | "modalText"
        | "modalTextSecondary";
    color?: "black" | "white" | "main" | "accent";
    fillNone?: boolean;
    className?: string;
    tagType: "h1" | "h2" | "h3" | "p" | "span";
}

export const Text = (props: TextProps) => {
    const { children, textType, fillNone, className, tagType, color = "" } = props;

    if (tagType === "h1")
        return (
            <h1 className={classNames(cls.Text, { [cls.fillNone]: fillNone }, [cls[textType], cls[color], className])}>
                {children}
            </h1>
        );

    if (tagType === "h2")
        return (
            <h2 className={classNames(cls.Text, { [cls.fillNone]: fillNone }, [cls[textType], cls[color], className])}>
                {children}
            </h2>
        );

    if (tagType === "h3")
        return (
            <h3 className={classNames(cls.Text, { [cls.fillNone]: fillNone }, [cls[textType], cls[color], className])}>
                {children}
            </h3>
        );

    if (tagType === "p")
        return (
            <p className={classNames(cls.Text, { [cls.fillNone]: fillNone }, [cls[textType], cls[color], className])}>
                {children}
            </p>
        );

    if (tagType === "span")
        return (
            <span
                className={classNames(cls.Text, { [cls.fillNone]: fillNone }, [cls[textType], cls[color], className])}
            >
                {children}
            </span>
        );
};
