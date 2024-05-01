import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./MenuCard.module.scss";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import SelectedIcon from "@/shared/assets/images/menu-page/selectedIcon.svg";
import { CounterButton } from "@/shared/ui/CounterButton";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    getProfileAuthorized,
    getProfileCartIsLoading,
    getProfileData,
    updateCart,
} from "@/features/editableProfileCard";
import { useSelector } from "react-redux";
import { Skeleton } from "@/shared/ui/Skeleton";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
    const cartIsLoading = useSelector(getProfileCartIsLoading);
    const { cart } = useSelector(getProfileData);
    const authorized = useSelector(getProfileAuthorized);
    const navigate = useNavigate();

    const animationVariants = {
        initial: {
            opacity: 0,
            y: 50,
        },

        animate: {
            opacity: 1,
            y: 0,
        },
    };

    const addNewItemToCart = (id: string) => {
        if (!authorized) {
            navigate("/login");
        } else {
            dispatch(updateCart({ ...cart, [id]: "1" }));
        }
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
            <motion.div
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                variants={animationVariants}
                initial="initial"
                whileInView="animate"
                className={classNames(cls.MenuCard, {}, [className])}
            >
                <div onClick={onClick} style={{ background: `url(${img}) center/cover` }} className={cls.img}>
                    <div className={cls.orangeTint}>
                        <img src={SelectedIcon} alt="" />
                    </div>
                </div>
                <div className={cls.infoWrapper}>
                    <Text pointer onClick={onClick} tagType="p" textType="cardHeader">
                        {title}
                    </Text>
                    <Text className={cls.price} tagType="p" textType="cardPrice">
                        {price}
                    </Text>
                    {cartIsLoading ? (
                        <Skeleton border="60px" width="100%" height={44} />
                    ) : (
                        <CounterButton
                            onDecrement={() => decrementCart(id)}
                            onIncrement={() => incrementCart(id)}
                            fullWidth
                            selectedAmount={selectedAmount}
                            className={cls.counter}
                        />
                    )}
                </div>
            </motion.div>
        );

    return (
        <motion.div
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            className={classNames(cls.MenuCard, {}, [className])}
        >
            <div onClick={onClick} style={{ background: `url(${img}) center/cover` }} className={cls.img}></div>
            <div className={cls.infoWrapper}>
                <Text pointer onClick={onClick} tagType="p" textType="cardHeader">
                    {title}
                </Text>
                <Text className={cls.price} tagType="p" textType="cardPrice">
                    {price}
                </Text>
                {cartIsLoading ? (
                    <Skeleton border="60px" width="100%" height={44} />
                ) : (
                    <Button onClick={() => addNewItemToCart(id)} fullWidth>
                        В корзину
                    </Button>
                )}
            </div>
        </motion.div>
    );
};
