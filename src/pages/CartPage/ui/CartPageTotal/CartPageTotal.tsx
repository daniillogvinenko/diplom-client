import { Text } from "@/shared/ui/Text";
import cls from "./CartPageTotal.module.scss";
import { totalByCart } from "@/shared/lib/totalByCart/totalByCart";
import { Button } from "@/shared/ui/Button";
import { useSelector } from "react-redux";
import { getProfileData } from "@/features/editableProfileCard";
import { NavLink } from "react-router-dom";

export const CartPageTotal = () => {
    const { cart } = useSelector(getProfileData);

    return (
        <div className={cls.totalWrapper}>
            <div className={cls.totalHeader}>
                <div>
                    <Text tagType="h3" textType="h3">
                        Итого
                    </Text>
                </div>
                <div>
                    <Text tagType="h3" textType="h3">
                        {totalByCart(cart)}
                    </Text>
                </div>
            </div>
            <NavLink to="/checkout">
                <Button>Перейти к оформлению</Button>
            </NavLink>
        </div>
    );
};
