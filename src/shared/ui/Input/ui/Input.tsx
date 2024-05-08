import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import { Text } from "../../Text";
import { InputMask } from "@react-input/mask";

interface InputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    className?: string;
    readonly?: boolean;
    type?: React.HTMLInputTypeAttribute;
    fullWidth?: boolean;
    mask?: "phone" | undefined;
}

export const Input = (props: InputProps) => {
    const { label, value, onChange, fullWidth, placeholder, mask, readonly, type, className = "" } = props;

    if (mask === "phone") {
        return (
            <div className={classNames(cls.Input, { [cls.fullWidth]: fullWidth }, [className])}>
                <Text tagType="p" textType="inputLabel">
                    {label}
                </Text>
                <InputMask
                    mask="+7 (___) ___-__-__"
                    replacement={{ _: /\d/ }}
                    disabled={readonly}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.Input, { [cls.fullWidth]: fullWidth }, [className])}>
            <Text tagType="p" textType="inputLabel">
                {label}
            </Text>
            <input
                disabled={readonly}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};
