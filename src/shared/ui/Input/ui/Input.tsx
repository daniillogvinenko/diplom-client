import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import { Text } from "../../Text";

interface InputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    className?: string;
}

export const Input = (props: InputProps) => {
    const { label, value, onChange, placeholder, className = "" } = props;

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <Text tagType="p" textType="inputLabel">
                {label}
            </Text>
            <input placeholder={placeholder} type="text" value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
};
