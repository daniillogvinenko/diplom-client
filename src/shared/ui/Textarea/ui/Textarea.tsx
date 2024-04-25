import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Textarea.module.scss";
import { Text } from "../../Text";

interface TextareaProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    className?: string;
    readonly?: boolean;
}

export const Textarea = (props: TextareaProps) => {
    const { label, value, readonly, onChange, placeholder, className = "" } = props;

    return (
        <div className={classNames(cls.Textarea, {}, [className])}>
            <Text tagType="p" textType="inputLabel">
                {label}
            </Text>
            <textarea
                disabled={readonly}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};
