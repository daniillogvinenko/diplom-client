import { Dropdown } from "@/shared/ui/Dropdown";
import { Input } from "@/shared/ui/Input";
import { Text } from "@/shared/ui/Text";
import { Textarea } from "@/shared/ui/Textarea";
import { Header } from "@/widgets/Header";
import { useState } from "react";
import cls from "./CheckoutPage.module.scss";
import { CheckoutPageTotal } from "./CheckoutPageTotal/CheckoutPageTotal";
import { BackLink } from "@/shared/ui/BackLink";
import { useSelector } from "react-redux";
import { getProfileData } from "@/features/editableProfileCard";
import { Footer } from "@/widgets/Footer";

const dropdownItem = [
    {
        id: 1,
        name: "Наличными",
        unavailable: false,
    },
    {
        id: 2,
        name: "Банковской картой курьеру",
        unavailable: false,
    },
    {
        id: 3,
        name: "Картой на сайте",
        unavailable: true,
    },
];

export const CheckoutPage = () => {
    const [selectedItem, setSelectedItem] = useState(dropdownItem[0]);

    const { firstname, phoneNumber, address } = useSelector(getProfileData);

    const [nameValue, setNameValue] = useState(firstname || "");
    const [phoneNumberValue, setPhoneNumberValue] = useState(phoneNumber || "");
    const [addressValue, setAddressValue] = useState(address || "");

    return (
        <div>
            <Header />
            <div className="container">
                <div>
                    <BackLink className={cls.backLink} to="/cart" text="Корзина" />

                    <Text className={cls.h1} tagType="h1" textType="h1">
                        ОФОРМЛЕНИЕ ЗАКАЗА
                    </Text>
                    <Text className={cls.h3} tagType="h3" textType="h3">
                        Контакты
                    </Text>
                    <div className={cls.contentWrapper}>
                        <div>
                            <Input
                                className={cls.input}
                                label="Имя"
                                placeholder="Имя"
                                value={nameValue}
                                onChange={setNameValue}
                            />
                            <Input
                                className={cls.input}
                                label="Номер телефона"
                                placeholder="Номер телефона"
                                value={phoneNumberValue}
                                onChange={setPhoneNumberValue}
                            />
                            <Textarea
                                className={cls.input}
                                label="Адрес"
                                placeholder="Адрес"
                                value={addressValue}
                                onChange={setAddressValue}
                            />
                            <Text className={cls.h3} tagType="h3" textType="h3">
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
            <Footer />
        </div>
    );
};
