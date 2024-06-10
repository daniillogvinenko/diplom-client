import { Header } from "@/widgets/Header";
import img1 from "@/shared/assets/images/about-page/mainImage.png";
import { Text } from "@/shared/ui/Text";
import cls from "./AboutPage.module.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { BackLink } from "@/shared/ui/BackLink";
import { Footer } from "@/widgets/Footer";
import img2 from "@/shared/assets/images/main-page/heroImage.jpg";

export const AboutPage = () => {
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

    const animationVariants2 = {
        initial: {
            opacity: 0,
            y: 60,
        },

        animate: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <div className={cls.AboutPage}>
            <Header />
            <div className={cls.heroSection} style={{ background: `url(${img1}) center/cover` }}>
                <motion.div
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 2.2 }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    <div className="container">
                        <Text tagType="span" color="white" textType="h1">
                            Погрузитесь в атмосферу восточной Африки с Addis Flavors!
                        </Text>
                    </div>
                </motion.div>
            </div>

            <div className="container">
                <BackLink className={cls.backLink} to="/" text="Главная" />

                <div className={cls.aboutSection}>
                    <motion.div
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        variants={animationVariants2}
                        initial="initial"
                        whileInView="animate"
                    >
                        <Text tagType="h1" textType="h1">
                            О РЕСТОРАНЕ
                        </Text>
                        <Text tagType="p" textType="text">
                            В Addis Flavors вас встретит уютный интерьер, напоминающий обстановку традиционных эфиопских
                            ресторанов, а мягкое освещение создаст атмосферу уюта и гостеприимства. <br />
                            <br /> Эфиопия – загадочная страна с богатой культурой, колоритными обычаями и
                            разнообразными вкусами. Этот древний край, расположенный на высотах Восточной Африки,
                            известен своими уникальными традициями и ароматными блюдами, которые завоевывают сердца
                            гурманов со всего мира.
                        </Text>
                    </motion.div>
                    <div>
                        <motion.img
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            variants={animationVariants2}
                            initial="initial"
                            whileInView="animate"
                            src={img2}
                            alt=""
                        />
                    </div>
                </div>
                <motion.div
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                    variants={animationVariants2}
                    initial="initial"
                    whileInView="animate"
                    className={cls.scheduleSection}
                >
                    <Text tagType="h1" textType="h1">
                        РЕЖИМ РАБОТЫ
                    </Text>
                    <Text tagType="p" textType="text">
                        Пн-Чт 12:00 - 23:00
                    </Text>
                    <Text tagType="p" textType="text">
                        Пт 12:00 - 00:00
                    </Text>
                    <Text tagType="p" textType="text">
                        Сб 13:00 - 00:00
                    </Text>
                    <Text tagType="p" textType="text">
                        Вс 13:00 - 23:00
                    </Text>
                </motion.div>
                <div className={cls.contactInfoSection}>
                    <motion.div
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        variants={animationVariants2}
                        initial="initial"
                        whileInView="animate"
                    >
                        <Text tagType="h1" textType="h1">
                            КОНТАКТЫ
                        </Text>
                        <Text tagType="p" textType="text">
                            Адрес
                        </Text>
                        <Text className={cls.info} tagType="p" textType="text">
                            Санкт-Петербург, Большая Морская ул., 18
                        </Text>

                        <Text tagType="p" textType="text">
                            Телефон
                        </Text>
                        <Text className={cls.info} tagType="p" textType="text">
                            +7 999 999-99-99
                        </Text>
                        <Text tagType="p" textType="text">
                            E-mail
                        </Text>
                        <Text className={cls.info} tagType="p" textType="text">
                            addisflavours@mail.ru
                        </Text>
                    </motion.div>
                    <motion.div
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        variants={animationVariants2}
                        initial="initial"
                        whileInView="animate"
                        className={cls.map}
                    >
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ada798c3ed1c23aca45a695db567236ece2f18693c178223ea218d972abc2920a&amp;source=constructor"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
