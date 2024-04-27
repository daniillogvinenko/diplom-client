import { Text } from "@/shared/ui/Text";
import { Header } from "@/widgets/Header";
import { CartList } from "./CartList/CartList";
import { MenuModal } from "@/features/menuModal";
import { useState } from "react";

export const CartPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState<number | null>(null);

    return (
        <div>
            <MenuModal modalIsOpen={modalIsOpen} onClose={() => setModalIsOpen(null)} />

            <Header />
            <div className="container">
                <div style={{ paddingTop: 210 }}>
                    <Text tagType="h1" textType="h1">
                        КОРЗИНА
                    </Text>
                    <Text tagType="h3" textType="h3">
                        Ваш заказ
                    </Text>
                    <CartList onOpenModal={setModalIsOpen} />
                </div>
            </div>
        </div>
    );
};
