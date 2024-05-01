import { ReactNode, forwardRef } from "react";
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
    color?: "black" | "white" | "main" | "accent" | "red";
    fillNone?: boolean;
    className?: string;
    tagType: "h1" | "h2" | "h3" | "p" | "span";
    onClick?: () => void;
    pointer?: boolean;
}

export const Text = forwardRef<HTMLHeadingElement, TextProps>((props: TextProps, ref) => {
    const { children, textType, onClick, fillNone, pointer, className, tagType, color = "" } = props;

    if (tagType === "h1")
        return (
            <h1
                ref={ref}
                onClick={onClick}
                className={classNames(cls.Text, { [cls.fillNone]: fillNone, [cls.pointer]: pointer }, [
                    cls[textType],
                    cls[color],
                    className,
                ])}
            >
                {children}
            </h1>
        );

    if (tagType === "h2")
        return (
            <h2
                ref={ref}
                onClick={onClick}
                className={classNames(cls.Text, { [cls.fillNone]: fillNone, [cls.pointer]: pointer }, [
                    cls[textType],
                    cls[color],
                    className,
                ])}
            >
                {children}
            </h2>
        );

    if (tagType === "h3")
        return (
            <h3
                ref={ref}
                onClick={onClick}
                className={classNames(cls.Text, { [cls.fillNone]: fillNone, [cls.pointer]: pointer }, [
                    cls[textType],
                    cls[color],
                    className,
                ])}
            >
                {children}
            </h3>
        );

    if (tagType === "p")
        return (
            <p
                onClick={onClick}
                className={classNames(cls.Text, { [cls.fillNone]: fillNone, [cls.pointer]: pointer }, [
                    cls[textType],
                    cls[color],
                    className,
                ])}
            >
                {children}
            </p>
        );

    if (tagType === "span")
        return (
            <span
                onClick={onClick}
                className={classNames(cls.Text, { [cls.fillNone]: fillNone, [cls.pointer]: pointer }, [
                    cls[textType],
                    cls[color],
                    className,
                ])}
            >
                {children}
            </span>
        );
});
