import { CartCard } from "@/entities/food";
import { Text } from "@/shared/ui/Text";
import { Header } from "@/widgets/Header";

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
                    <div>
                        <CartCard
                            amount={2}
                            onDecrement={alert}
                            onIncrement={alert}
                            price="780 Р."
                            title="Lorem Ipsum"
                            img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                        />
                        <CartCard
                            amount={2}
                            onDecrement={alert}
                            onIncrement={alert}
                            price="780 Р."
                            title="Lorem Ipsum"
                            img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                        />
                        <CartCard
                            amount={2}
                            onDecrement={alert}
                            onIncrement={alert}
                            price="780 Р."
                            title="Lorem Ipsum"
                            img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
