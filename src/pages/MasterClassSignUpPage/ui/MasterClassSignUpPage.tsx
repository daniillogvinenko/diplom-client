import { classNames } from "@/shared/lib/classNames/classNames";
import { Header } from "@/widgets/Header";
import cls from "./MasterClassSignUpPage.module.scss";
import { Text } from "@/shared/ui/Text";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@/shared/ui/Input";
import { useEffect, useState } from "react";
import { Button } from "@/shared/ui/Button";
import { BackLink } from "@/shared/ui/BackLink";
import { MasterClassItems } from "@/shared/const/MasterClassItems";
import { useSelector } from "react-redux";
import { getProfileData } from "@/features/editableProfileCard";
import { Footer } from "@/widgets/Footer";
import { Modal } from "@/shared/ui/Modal";
import ModalCloseIcon from "@/shared/assets/images/menu-page/modalClose.svg";
import { Drawer } from "@/shared/ui/Drawer";
import DrawerCloseIcon from "@/shared/assets/images/common/drawerClose.svg";

export const MasterClassSignUpPage = () => {
    const { id } = useParams();

    const item = MasterClassItems.find((masterClass) => masterClass.id === id);

    // значение для имени и телеофна берется из данных профиля
    const { firstname, phoneNumber } = useSelector(getProfileData);

    const [nameValue, setNameValue] = useState(firstname || "");
    const [phoneNumberValue, setPhoneNumberValue] = useState(phoneNumber || "");
    const [amount, setAmount] = useState("");
    const [additional, setAdditional] = useState("");

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const navigate = useNavigate();
    const handleModalClose = () => {
        navigate("/");
    };

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className={classNames(cls.MasterClassSignUpPage, {}, [])}>
            <Header />
            <div className={cls.pageContent}>
                <Modal className={cls.Modal} onClose={handleModalClose} isOpen={modalIsOpen}>
                    <div className={cls.modalContent}>
                        <div className={cls.modalHeader}>
                            <Text className={cls.modalTitle} tagType="p" textType="modalH1">
                                Запись прошла успешно!
                            </Text>
                            <img onClick={handleModalClose} src={ModalCloseIcon} alt="" />
                        </div>
                        <Text className={cls.modalText} tagType="p" textType="modalText">
                            Мастер класс "{item?.title}"
                        </Text>
                        <Text className={cls.modalText} tagType="p" textType="modalText">
                            {item?.date}
                        </Text>
                        <Text className={cls.modalText} tagType="p" textType="modalText">
                            {/* todo Написать полноценную функцию */}
                            {amount} персон{+amount % 10 === 1 ? "а" : +amount % 10 < 5 ? "ы" : ""}
                        </Text>
                        <Button onClick={handleModalClose} variant="outlineDark">
                            Готово
                        </Button>
                    </div>
                </Modal>
                <Drawer className={cls.Drawer} onClose={handleModalClose} isOpen={modalIsOpen}>
                    <div className={cls.modalContent}>
                        <div className={cls.closeWrapper}>
                            <img onClick={handleModalClose} src={DrawerCloseIcon} alt="" />
                        </div>
                        <div className={cls.modalHeader}>
                            <Text className={cls.modalTitle} tagType="p" textType="modalH1">
                                Запись прошла успешно!
                            </Text>
                        </div>
                        <Text className={cls.modalText} tagType="p" textType="modalText">
                            Мастер класс "{item?.title}"
                        </Text>
                        <Text className={cls.modalText} tagType="p" textType="modalText">
                            {item?.date}
                        </Text>
                        <Text className={cls.modalText} tagType="p" textType="modalText">
                            {/* todo Написать полноценную функцию */}
                            {amount} персон{+amount % 10 === 1 ? "а" : +amount % 10 < 5 ? "ы" : ""}
                        </Text>
                        <Button fullWidth onClick={handleModalClose} variant="outlineDark">
                            Готово
                        </Button>
                    </div>
                </Drawer>
                <div className="container">
                    <div>
                        <BackLink className={cls.backLink} to="/master-classes" text="Все мастер-классы" />
                        <Text tagType="h1" className={cls.title} textType="h1">
                            ЗАПИСАТЬСЯ НА МАСТЕР-КЛАСС
                        </Text>
                        <div className={cls.flex}>
                            <div>
                                <Text tagType="h3" className={cls.h3title} textType="h3">
                                    Цена за персону
                                </Text>
                                <Text tagType="p" textType="text">
                                    {item?.price}
                                </Text>
                                <Text tagType="h3" className={cls.h3title} textType="h3">
                                    Дата
                                </Text>
                                <Text tagType="p" textType="text">
                                    {item?.date}
                                </Text>
                                <Text tagType="h3" className={cls.h3title} textType="h3">
                                    Продолжительность
                                </Text>
                                <Text tagType="p" textType="text">
                                    {item?.duration}
                                </Text>
                                <Text tagType="h3" className={cls.h3title} textType="h3">
                                    Будем готовить
                                </Text>
                                {item?.dishes.map((dish) => (
                                    <Text tagType="p" textType="text">
                                        {dish}
                                    </Text>
                                ))}
                                <Text tagType="h3" className={cls.h3title} textType="h3">
                                    В стоимость входит
                                </Text>
                                <Text tagType="p" textType="text">
                                    Продукты и инвентарь для приготовления
                                </Text>
                                <Text tagType="p" textType="text">
                                    Приготовление блюд
                                </Text>
                                <Text tagType="p" textType="text">
                                    Электронные рецепты приготовления блюд
                                </Text>
                                <Text tagType="p" textType="text">
                                    Безлимитные безалкогольные напитки
                                </Text>
                            </div>
                            <div className={cls.inputWrapper}>
                                <Input
                                    className={cls.input}
                                    label="Ваше имя"
                                    placeholder="Ваше имя"
                                    value={nameValue}
                                    onChange={setNameValue}
                                />
                                <Input
                                    className={cls.input}
                                    label="Количество гостей"
                                    placeholder="Количество гостей"
                                    value={amount}
                                    onChange={setAmount}
                                />
                                <Input
                                    className={cls.input}
                                    label="Телефон"
                                    placeholder="Телефон"
                                    value={phoneNumberValue}
                                    onChange={setPhoneNumberValue}
                                />
                                <Input
                                    className={cls.input}
                                    label="Пожелания к бронированию"
                                    placeholder="Пожелания к бронированию"
                                    value={additional}
                                    onChange={setAdditional}
                                />
                                <Button onClick={() => setModalIsOpen(true)}>Подтвердить</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
