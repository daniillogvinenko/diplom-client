import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./MasterClassesPage.module.scss";
import { Header } from "@/widgets/Header";
import { Text } from "@/shared/ui/Text";
import { MasterClassCard } from "@/entities/masterClass";
import { BackLink } from "@/shared/ui/BackLink";
import { useEffect } from "react";

export const MasterClassesPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className={classNames(cls.MasterClassesPage, {}, [])}>
            <Header />
            <div className="container">
                <div style={{ paddingTop: 210 }}>
                    <BackLink className={cls.backLink} to="/" text="Главная" />

                    <Text tagType="h1" textType="h1">
                        КУЛИНАРНЫЕ МАСТЕР КЛАССЫ <br /> В ADDIS FLAVORS
                    </Text>
                </div>
                <Text tagType="h3" textType="h3">
                    Расписание на апрель-май
                </Text>
                <div className={cls.itemsContainer}>
                    <MasterClassCard
                        date="14.04 Суббота 18:00"
                        price="3500 Р."
                        title="Мастер класс “Lorem Ipsum”"
                        img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                    />
                    <MasterClassCard
                        date="14.04 Суббота 18:00"
                        price="3500 Р."
                        title="Мастер класс “Lorem Ipsum”"
                        img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                    />
                    <MasterClassCard
                        date="14.04 Суббота 18:00"
                        price="3500 Р."
                        title="Мастер класс “Lorem Ipsum”"
                        img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                    />
                    <MasterClassCard
                        date="14.04 Суббота 18:00"
                        price="3500 Р."
                        title="Мастер класс “Lorem Ipsum”"
                        img="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                    />
                </div>
            </div>
        </div>
    );
};
