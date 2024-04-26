import { CartCard } from "@/entities/food";
import { getProfileData } from "@/features/editableProfileCard";
import { useSelector } from "react-redux";
import cls from "./CartList.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface CartListProps {
    className?: string;
}

export const CartList = (props: CartListProps) => {
    const { className } = props;
    const { cart } = useSelector(getProfileData);

    return (
        <div className={classNames(cls.CartList, {}, [className])}>
            {Object.entries(cart).map((entry) => (
                <CartCard className={cls.card} id={entry[0]} key={entry[0]} amount={+entry[1]} />
            ))}
        </div>
    );
};
