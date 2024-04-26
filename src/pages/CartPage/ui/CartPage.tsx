import { Text } from "@/shared/ui/Text";
import { Header } from "@/widgets/Header";
import { CartList } from "./CartList/CartList";

export const CartPage = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div style={{ paddingTop: 210 }}>
                    <Text tagType="h1" textType="h1">
                        КОРЗИНА
                    </Text>
                    <Text tagType="h3" textType="h3">
                        Ваш заказ
                    </Text>
                    <CartList />
                </div>
            </div>
        </div>
    );
};
