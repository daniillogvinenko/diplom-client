import { Header } from "@/widgets/Header";
import cls from "./MenuPage.module.scss";
import img1 from "@/shared/assets/images/menu-page/heroImage.png";
import { Text } from "@/shared/ui/Text";
import { MyMarquee } from "@/widgets/MyMarquee";
import { MenuCard } from "@/entities/food";
import { Modal } from "@/shared/ui/Modal";
import { useState } from "react";
import ModalCloseIcon from "@/shared/assets/images/menu-page/modalClose.svg";

export const MenuPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div>
            <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                <div className={cls.modalWrapper}>
                    <div style={{ background: `url(${img1}) center/cover` }} className={cls.modalImage}></div>
                    <div className={cls.modalRight}>
                        <div className={cls.modalHeader}>
                            <Text textType="modalH1" tagType="span">
                                Lorem ipsum
                            </Text>
                            <img src={ModalCloseIcon} alt="" />
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
                    <Text tagType="h2" textType="h2">
                        Эфиопская кухня
                    </Text>
                    <div className={cls.cardsContainer}>
                        <MenuCard
                            img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                            price="790 Р."
                            selected={true}
                            title="Lorem"
                        />
                        <MenuCard
                            img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                            price="790 Р."
                            selected={false}
                            title="Lorem"
                        />
                        <MenuCard
                            img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                            price="790 Р."
                            selected={true}
                            title="Lorem"
                        />
                        <MenuCard
                            img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                            price="790 Р."
                            selected={false}
                            title="Lorem"
                        />
                        <MenuCard
                            img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                            price="790 Р."
                            selected={true}
                            title="Lorem"
                        />
                        <MenuCard
                            img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                            price="790 Р."
                            selected={false}
                            title="Lorem"
                        />
                    </div>
                    <Text tagType="h2" textType="h2">
                        Эфиопская кухня
                    </Text>
                    <div className={cls.cardsContainer}>
                        <MenuCard
                            img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                            price="790 Р."
                            selected={true}
                            title="Lorem"
                        />
                        <MenuCard
                            img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                            price="790 Р."
                            selected={false}
                            title="Lorem"
                        />
                        <MenuCard
                            img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                            price="790 Р."
                            selected={true}
                            title="Lorem"
                        />
                        <MenuCard
                            img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                            price="790 Р."
                            selected={false}
                            title="Lorem"
                        />
                        <MenuCard
                            img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                            price="790 Р."
                            selected={true}
                            title="Lorem"
                        />
                        <MenuCard
                            img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                            price="790 Р."
                            selected={false}
                            title="Lorem"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
