import { Dropdown } from "@/shared/ui/Dropdown";
import { Input } from "@/shared/ui/Input";
import { Text } from "@/shared/ui/Text";
import { Textarea } from "@/shared/ui/Textarea";
import { Header } from "@/widgets/Header";
import { useState } from "react";
import cls from "./CheckoutPage.module.scss";
import { CheckoutPageTotal } from "./CheckoutPageTotal/CheckoutPageTotal";

const dropdownItem = [
    {
        id: 1,
        name: "Наличными",
        unavailable: false,
    },
    {
        id: 2,
        name: "variant 2",
        unavailable: true,
    },
    {
        id: 3,
        name: "variant 3",
        unavailable: false,
    },
];

export const CheckoutPage = () => {
    const [selectedItem, setSelectedItem] = useState(dropdownItem[0]);

    return (
        <div>
            <Header />
            <div className="container">
                <div style={{ paddingTop: 210 }}>
                    <Text tagType="h1" textType="h1">
                        ОФОРМЛЕНИЕ ЗАКАЗА
                    </Text>
                    <Text tagType="h3" textType="h3">
                        Контакты
                    </Text>
                    <div className={cls.contentWrapper}>
                        <div>
                            <Input label="Имя" placeholder="Имя" value="1" onChange={console.log} />
                            <Input
                                label="Номер телефона"
                                placeholder="Номер телефона"
                                value="1"
                                onChange={console.log}
                            />
                            <Textarea label="Адрес" placeholder="Адрес" value="1" onChange={console.log} />
                            <Text tagType="h3" textType="h3">
                                Способ оплаты
                            </Text>
                            <Dropdown
                                items={dropdownItem}
                                selectedItem={selectedItem}
                                onSetSelected={setSelectedItem}
                            />
                        </div>
                        <div>
                            <CheckoutPageTotal />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
