import { getProfileData } from "@/features/editableProfileCard";
import { classNames } from "@/shared/lib/classNames/classNames";
import { totalByCart } from "@/shared/lib/totalByCart/totalByCart";
import { Button } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";
import { useSelector } from "react-redux";
import cls from "./CheckoutPageTotal.module.scss";

export const CheckoutPageTotal = () => {
    const { cart } = useSelector(getProfileData);

    return (
        <div className={classNames(cls.CheckoutPageTotal, {}, [])}>
            <Text className={cls.header} tagType="h3" textType="h3">
                Состав заказа
            </Text>
            <div className={cls.flex}>
                <Text tagType="p" textType="text">
                    3 товара
                </Text>
                <Text tagType="p" textType="text">
                    {totalByCart(cart)}
                </Text>
            </div>
            <div className={cls.flex}>
                <Text tagType="p" textType="text">
                    Доставка
                </Text>
                <Text tagType="p" textType="text">
                    0 Р.
                </Text>
            </div>
            <div className={cls.separator}></div>
            <div className={cls.flex}>
                <Text tagType="p" textType="text">
                    Итого
                </Text>
                <Text tagType="p" textType="text">
                    {totalByCart(cart)}
                </Text>
            </div>
            <Button fullWidth className={cls.button}>
                Подтвердить заказ
            </Button>
        </div>
    );
};
