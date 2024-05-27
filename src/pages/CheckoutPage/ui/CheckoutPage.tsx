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
import { getProfileData, profileActions, updateCart } from "@/features/editableProfileCard";
import { Footer } from "@/widgets/Footer";
import ModalCloseIcon from "@/shared/assets/images/menu-page/modalClose.svg";
import { Modal } from "@/shared/ui/Modal";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import DrawerCloseIcon from "@/shared/assets/images/common/drawerClose.svg";
import { Drawer } from "@/shared/ui/Drawer";
// import { Navigate } from "react-router-dom";

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
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const { firstname, phoneNumber, address } = useSelector(getProfileData);

    const [nameValue, setNameValue] = useState(firstname || "");
    const [phoneNumberValue, setPhoneNumberValue] = useState(phoneNumber || "");
    const [addressValue, setAddressValue] = useState(address || "");

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // const { cart } = useSelector(getProfileData);

    // if (Object.entries(cart).length === 0) return <Navigate to="/menu" />;

    // при подтверждении заказа корзина отчищается и происходит редирект на главную
    const handleCloseModal = () => {
        dispatch(profileActions.updateCart({}));
        dispatch(updateCart({}));
        navigate("/");
    };

    return (
        <div className={cls.CheckoutPage}>
            <Header />
            <div className={cls.pageContent}>
                <div className="container">
                    <Modal className={cls.Modal} onClose={handleCloseModal} isOpen={modalIsOpen}>
                        <div className={cls.modalContent}>
                            <div className={cls.modalHeader}>
                                <Text className={cls.modalTitle} tagType="p" textType="modalH1">
                                    Ваш заказ принят!
                                </Text>
                                <img onClick={handleCloseModal} src={ModalCloseIcon} alt="" />
                            </div>
                            <Text className={cls.modalText} tagType="p" textType="modalText">
                                Ожидайте доставку в ближайшее время.{" "}
                            </Text>
                            <Button fullWidth onClick={handleCloseModal}>
                                Готово
                            </Button>
                        </div>
                    </Modal>
                    <Drawer className={cls.Drawer} onClose={handleCloseModal} isOpen={modalIsOpen}>
                        <div className={cls.modalContent}>
                            <div className={cls.closeWrapper}>
                                <img onClick={handleCloseModal} src={DrawerCloseIcon} alt="" />
                            </div>
                            <div className={cls.modalHeader}>
                                <Text className={cls.modalTitle} tagType="p" textType="modalH1">
                                    Ваш заказ принят!
                                </Text>
                            </div>
                            <Text className={cls.modalText} tagType="p" textType="modalText">
                                Ожидайте доставку в ближайшее время.{" "}
                            </Text>
                            <Button fullWidth onClick={handleCloseModal}>
                                Готово
                            </Button>
                        </div>
                    </Drawer>
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
                                <CheckoutPageTotal onClick={() => setModalIsOpen(true)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
