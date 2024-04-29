import { Header } from "@/widgets/Header";
import img1 from "@/shared/assets/images/about-page/mainImage.png";
import { Text } from "@/shared/ui/Text";
import cls from "./AboutPage.module.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { BackLink } from "@/shared/ui/BackLink";
import { Footer } from "@/widgets/Footer";

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
            y: 100,
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
                    <Text tagType="span" color="white" textType="pageTitle">
                        О НАС
                    </Text>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Text>
                    </motion.div>
                    <div>
                        <motion.img
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            variants={animationVariants2}
                            initial="initial"
                            whileInView="animate"
                            src={
                                "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/abstract-blue-light-background_SvZPryOnfl_thumb.jpg"
                            }
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.8533503095884!2d30.314043177388424!3d59.93457556242721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310526f0854f%3A0xdbd92a3587fa4dc4!2z0JHQvtC70YzRiNCw0Y8g0JzQvtGA0YHQutCw0Y8g0YPQuy4sIDE4LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTkxMTg2!5e0!3m2!1sru!2sru!4v1714036016910!5m2!1sru!2sru"
                            style={{ border: 0 }}
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
