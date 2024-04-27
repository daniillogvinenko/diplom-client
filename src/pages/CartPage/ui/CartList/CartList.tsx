import { CartCard } from "@/entities/food";
import { getProfileData } from "@/features/editableProfileCard";
import { useSelector } from "react-redux";
import cls from "./CartList.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface CartListProps {
    className?: string;
    onOpenModal: (value: number) => void;
}

export const CartList = (props: CartListProps) => {
    const { className, onOpenModal } = props;
    const { cart } = useSelector(getProfileData);

    return (
        <div className={classNames(cls.CartList, {}, [className])}>
            {Object.entries(cart).map((entry) => (
                <CartCard
                    onClick={() => onOpenModal(+entry[0])}
                    className={cls.card}
                    id={entry[0]}
                    key={entry[0]}
                    amount={+entry[1]}
                />
            ))}
        </div>
    );
};
