import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./MenuCard.module.scss";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import SelectedIcon from "@/shared/assets/images/menu-page/selectedIcon.svg";
import { CounterButton } from "@/shared/ui/CounterButton";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getProfileData, updateCart } from "@/features/editableProfileCard";
import { useSelector } from "react-redux";

interface MenuCardProps {
    title: string;
    price: string;
    selected: boolean;
    selectedAmount?: number;
    img: string;
    className?: string;
    onClick: () => void;
    id: string;
}

export const MenuCard = (props: MenuCardProps) => {
    const { price, id, selected, onClick, title, selectedAmount = 1, img, className } = props;
    const dispatch = useAppDispatch();
    const { cart } = useSelector(getProfileData);

    const addNewItemToCart = (id: string) => {
        dispatch(updateCart({ ...cart, [id]: "1" }));
    };

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

    if (selected)
        return (
            <div className={classNames(cls.MenuCard, {}, [className])}>
                <div onClick={onClick} style={{ background: `url(${img}) center/cover` }} className={cls.img}>
                    <div className={cls.orangeTint}>
                        <img src={SelectedIcon} alt="" />
                    </div>
                </div>
                <div className={cls.infoWrapper}>
                    <Text pointer onClick={onClick} tagType="span" textType="cardHeader">
                        {title}
                    </Text>
                    <div className={cls.flex}>
                        <Text tagType="span" textType="cardPrice">
                            {price}
                        </Text>
                    </div>
                    <CounterButton
                        onDecrement={() => decrementCart(id)}
                        onIncrement={() => incrementCart(id)}
                        fullWidth
                        selectedAmount={selectedAmount}
                        className={cls.counter}
                    />
                </div>
            </div>
        );

    return (
        <div className={classNames(cls.MenuCard, {}, [className])}>
            <div onClick={onClick} style={{ background: `url(${img}) center/cover` }} className={cls.img}></div>
            <div className={cls.infoWrapper}>
                <Text pointer onClick={onClick} tagType="span" textType="cardHeader">
                    {title}
                </Text>
                <div className={cls.flex}>
                    <Text tagType="span" textType="cardPrice">
                        {price}
                    </Text>
                </div>
                <Button onClick={() => addNewItemToCart(id)} fullWidth>
                    В корзину
                </Button>
            </div>
        </div>
    );
};
