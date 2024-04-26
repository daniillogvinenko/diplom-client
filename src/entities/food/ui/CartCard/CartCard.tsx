import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./CartCard.module.scss";
import { Text } from "@/shared/ui/Text";
import { CounterButton } from "@/shared/ui/CounterButton";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getProfileCartIsLoading, getProfileData, updateCart } from "@/features/editableProfileCard";
import CloseIcon from "@/shared/assets/images/cart-page/cartClose.png";
import { useSelector } from "react-redux";
import { Skeleton } from "@/shared/ui/Skeleton";
import { itemByIdFromMenu } from "@/shared/lib/itemByIdFromMenu/itemByIdFromMenu";

interface CartCardProps {
    className?: string;
    amount: number;
    id: string;
}

export const CartCard = (props: CartCardProps) => {
    const { className, amount = 1, id } = props;
    const { cart } = useSelector(getProfileData);
    const cartIsLoading = useSelector(getProfileCartIsLoading);
    const dispatch = useAppDispatch();

    const incrementCart = (id: string) => {
        const newValue = String(+cart[id] + 1);

        dispatch(updateCart({ ...cart, [id]: newValue }));
    };

    const decrementCart = (id: string) => {
        if (+cart[id] > 1) {
            const newValue = String(+cart[id] - 1);

            dispatch(updateCart({ ...cart, [id]: newValue }));
        } else {
            const newCartValue = { ...cart };
            delete newCartValue[id];
            dispatch(updateCart({ ...newCartValue }));
        }
    };

    const removeFromCart = (id: string) => {
        const newCartValue = { ...cart };
        delete newCartValue[id];
        dispatch(updateCart({ ...newCartValue }));
    };

    const { img, title, price } = itemByIdFromMenu(+id);

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
                <div className={cls.counter}>
                    <img className={cls.deleteBtn} onClick={() => removeFromCart(id)} src={CloseIcon} alt="" />
                    {cartIsLoading ? (
                        <Skeleton border="60px" width="100%" height={44} />
                    ) : (
                        <CounterButton
                            onDecrement={() => decrementCart(id)}
                            onIncrement={() => incrementCart(id)}
                            selectedAmount={amount}
                            fullWidth
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
