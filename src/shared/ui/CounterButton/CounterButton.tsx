import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./CounterButton.module.scss";
import DecrementIcon from "@/shared/assets/images/menu-page/DecrementIcon.svg";
import IncrementIcon from "@/shared/assets/images/menu-page/IncrementIcon.svg";
import { Text } from "../Text";
interface CounterButtonProps {
    className?: string;
    selectedAmount: number;
    fullWidth?: boolean;
    onIncrement: () => void;
    onDecrement: () => void;
}

export const CounterButton = (props: CounterButtonProps) => {
    const { className, selectedAmount, fullWidth, onIncrement, onDecrement } = props;

    return (
        <button className={classNames(cls.CounterButton, { [cls.fullWidth]: fullWidth }, [className])}>
            <div className={cls.counter}>
                <div onClick={onDecrement}>
                    <img src={DecrementIcon} alt="" />
                </div>
                <Text tagType="span" textType="text">
                    {selectedAmount}
                </Text>
                <div onClick={onIncrement}>
                    <img src={IncrementIcon} alt="" />
                </div>
            </div>
        </button>
    );
};
