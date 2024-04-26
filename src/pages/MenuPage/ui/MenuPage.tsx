import { Header } from "@/widgets/Header";
import cls from "./MenuPage.module.scss";
import img1 from "@/shared/assets/images/menu-page/heroImage.png";
import { Text } from "@/shared/ui/Text";
import { MyMarquee } from "@/widgets/MyMarquee";
import { useState } from "react";
import { MenuModal } from "@/features/menuModal";
import { MenuList } from "./MenuList/MenuList";

export const MenuPage = () => {
    // нулл - модальное окно закрыто, число - модалка открыта и показывает блюдо с установленным айди
    const [modalIsOpen, setModalIsOpen] = useState<number | null>(null);

    return (
        <div>
            <MenuModal modalIsOpen={modalIsOpen} onClose={() => setModalIsOpen(null)} />
            <Header />
            <div style={{ background: `url(${img1})` }} className={cls.heroSection}>
                <Text tagType="span" color="white" textType="pageTitle">
                    МЕНЮ
                </Text>
            </div>
            <MyMarquee />
            <div className={cls.navigation}>
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
            <MenuList onOpenModal={setModalIsOpen} />
        </div>
    );
};
