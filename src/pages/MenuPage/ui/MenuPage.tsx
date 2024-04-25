import { Header } from "@/widgets/Header";
import cls from "./MenuPage.module.scss";
import img1 from "@/shared/assets/images/menu-page/heroImage.png";
import { Text } from "@/shared/ui/Text";
import { MyMarquee } from "@/widgets/MyMarquee";
import { MenuCard } from "@/entities/food";
import { Modal } from "@/shared/ui/Modal";
import { useState } from "react";
import ModalCloseIcon from "@/shared/assets/images/menu-page/modalClose.svg";
import { MenuItems } from "@/shared/const/MenuItems";

export const MenuPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div>
            <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                <div className={cls.modalWrapper}>
                    <div style={{ background: `url(${img1}) center/cover` }} className={cls.modalImage}></div>
                    <div className={cls.modalRight}>
                        <div>
                            <div className={cls.modalHeader}>
                                <Text textType="modalH1" tagType="span">
                                    Lorem ipsum
                                </Text>
                                <img onClick={() => setModalIsOpen(false)} src={ModalCloseIcon} alt="" />
                            </div>
                            <Text tagType="span" textType="modalTextSecondary">
                                500 г
                            </Text>
                            <Text tagType="p" textType="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            </Text>
                        </div>
                        <div>
                            <Text tagType="p" textType="text">
                                Пищевая ценность на 100 г
                            </Text>
                            <div className={cls.statsFlex}>
                                <div>
                                    <Text tagType="p" textType="modalTextSecondary">
                                        Белки
                                    </Text>
                                    <Text tagType="p" textType="modalText">
                                        5г
                                    </Text>
                                </div>
                                <div>
                                    <Text tagType="p" textType="modalTextSecondary">
                                        Белки
                                    </Text>
                                    <Text tagType="p" textType="modalText">
                                        5г
                                    </Text>
                                </div>
                                <div>
                                    <Text tagType="p" textType="modalTextSecondary">
                                        Белки
                                    </Text>
                                    <Text tagType="p" textType="modalText">
                                        5г
                                    </Text>
                                </div>
                                <div>
                                    <Text tagType="p" textType="modalTextSecondary">
                                        Белки
                                    </Text>
                                    <Text tagType="p" textType="modalText">
                                        5г
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <Header />
            <div style={{ background: `url(${img1})` }} className={cls.heroSection}>
                <Text tagType="span" color="white" textType="pageTitle">
                    МЕНЮ
                </Text>
            </div>
            <MyMarquee />
            <div className={cls.navigation} onClick={() => setModalIsOpen(true)}>
                <div className="container">
                    <div className={cls.navigatinWrapper}>
                        <Text color="white" textType="text" tagType="span">
                            Эфиопская кухня
                        </Text>
                        <Text color="white" textType="text" tagType="span">
                            Эфиопская кухня
                        </Text>
                        <Text color="white" textType="text" tagType="span">
                            Эфиопская кухня
                        </Text>
                        <Text color="white" textType="text" tagType="span">
                            Эфиопская кухня
                        </Text>
                        <Text color="white" textType="text" tagType="span">
                            Эфиопская кухня
                        </Text>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    {MenuItems.map((section) => (
                        <>
                            <Text tagType="h2" textType="h2">
                                {section.title}
                            </Text>
                            <div className={cls.cardsContainer}>
                                {section.items.map((item) => (
                                    <MenuCard img={item.img} price={item.price} selected={true} title={item.title} />
                                ))}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};
