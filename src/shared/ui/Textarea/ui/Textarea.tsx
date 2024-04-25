import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Textarea.module.scss";
import { Text } from "../../Text";

interface TextareaProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    className?: string;
}

export const Textarea = (props: TextareaProps) => {
    const { label, value, onChange, placeholder, className = "" } = props;

    return (
        <div className={classNames(cls.Textarea, {}, [className])}>
            <Text tagType="p" textType="inputLabel">
                {label}
            </Text>
            <textarea placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
};
