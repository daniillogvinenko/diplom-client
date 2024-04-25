import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./CartCard.module.scss";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import DecrementIcon from "@/shared/assets/images/menu-page/DecrementIcon.svg";
import IncrementIcon from "@/shared/assets/images/menu-page/IncrementIcon.svg";

interface CartCardProps {
    className?: string;
    title: string;
    price: string;
    amount: number;
    onIncrement: () => void;
    onDecrement: () => void;
    img: string;
}

export const CartCard = (props: CartCardProps) => {
    const { className, amount = 1, img, onDecrement, onIncrement, price, title } = props;

    return (
        <div className={classNames(cls.CartCard, {}, [className])}>
            <div style={{ background: `url(${img}) center/cover` }} className={cls.img}></div>
            <div className={cls.right}>
                <div>
                    <Text tagType="p" textType="cardHeader">
                        {title}
                    </Text>
                    <Text tagType="span" textType="cardPrice">
                        {price}
                    </Text>
                </div>
                <div>
                    <Button>
                        <div className={cls.counter}>
                            <img src={DecrementIcon} alt="" />
                            <Text tagType="span" textType="text">
                                {amount}
                            </Text>
                            <img src={IncrementIcon} alt="" />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
};
