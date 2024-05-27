import { Order } from "@/entities/profile";
import cls from "./OrderCard.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text";
import { itemByIdFromMenu } from "@/shared/lib/itemByIdFromMenu/itemByIdFromMenu";
import { Button } from "@/shared/ui/Button";
import { totalByCart } from "@/shared/lib/totalByCart/totalByCart";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { updateCart } from "@/features/editableProfileCard";
import { useNavigate } from "react-router-dom";

interface OrderCardProps {
    order: Order;
    className?: string;
}

export const OrderCard = ({ order, className }: OrderCardProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleOnRepeat = () => {
        dispatch(updateCart(order.dishes));
        navigate("/cart");
    };

    return (
        <div className={classNames(cls.OrderCard, {}, [className])}>
            <Text tagType="p" textType="text">
                {order.date}
            </Text>
            <Text tagType="p" textType="text">
                {order.id}
            </Text>
            <div className={cls.separation}></div>
            {Object.entries(order.dishes).map((item, i) => (
                <div key={i} className={cls.flex}>
                    <Text tagType="p" textType="text">
                        {itemByIdFromMenu(+item[0]).title}
                    </Text>
                    <Text tagType="p" textType="text">
                        x{item[1]}
                    </Text>
                </div>
            ))}
            <div className={cls.flex}>
                <Button onClick={handleOnRepeat}>Повторить</Button>
                <Text tagType="p" textType="cardPrice">
                    {totalByCart(order.dishes)}
                </Text>
            </div>
        </div>
    );
};
