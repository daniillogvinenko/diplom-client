import { Header } from "@/widgets/Header";
import cls from "./MenuPage.module.scss";
import img1 from "@/shared/assets/images/menu-page/heroImage.png";
import { Text } from "@/shared/ui/Text";
import { MyMarquee } from "@/widgets/MyMarquee";
import { useEffect, useState } from "react";
import { MenuModal } from "@/features/menuModal";
import { MenuList } from "./MenuList/MenuList";
import { motion } from "framer-motion";
import { Footer } from "@/widgets/Footer";

export const MenuPage = () => {
    // нулл - модальное окно закрыто, число - модалка открыта и показывает блюдо с установленным айди
    const [modalIsOpen, setModalIsOpen] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const animationVariants = {
        initial: {
            opacity: 0,
        },

        animate: {
            opacity: 1,
        },
    };

    return (
        <div>
            <MenuModal modalIsOpen={modalIsOpen} onClose={() => setModalIsOpen(null)} />
            <Header />
            <div className={cls.heroSection} style={{ background: `url(${img1}) center/cover` }}>
                <motion.div
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 2.2 }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    <Text tagType="span" color="white" textType="pageTitle">
                        МЕНЮ
                    </Text>
                </motion.div>
            </div>
            <MyMarquee />

            <MenuList onOpenModal={setModalIsOpen} />
            <Footer />
        </div>
    );
};
