import { Text } from "@/shared/ui/Text";
import { Header } from "@/widgets/Header";
import { CartList } from "./CartList/CartList";
import { MenuModal } from "@/features/menuModal";
import { useState } from "react";
import cls from "./CartPage.module.scss";
import { CartPageTotal } from "./CartPageTotal/CartPageTotal";
import { BackLink } from "@/shared/ui/BackLink";

export const CartPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState<number | null>(null);

    return (
        <div>
            <MenuModal modalIsOpen={modalIsOpen} onClose={() => setModalIsOpen(null)} />

            <Header />
            <div className="container">
                <div>
                    <BackLink className={cls.backLink} to="/" text="Главная" />
                    <Text className={cls.h1} tagType="h1" textType="h1">
                        КОРЗИНА
                    </Text>
                    <Text className={cls.h3} tagType="h3" textType="h3">
                        Ваш заказ
                    </Text>
                    <div className={cls.contentWrapper}>
                        <CartList onOpenModal={setModalIsOpen} />
                        <CartPageTotal />
                    </div>
                </div>
            </div>
        </div>
    );
};
