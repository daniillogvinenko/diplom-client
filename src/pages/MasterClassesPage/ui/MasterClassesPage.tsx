import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./MasterClassesPage.module.scss";
import { Header } from "@/widgets/Header";
import { Text } from "@/shared/ui/Text";
import { MasterClassCard } from "@/entities/masterClass";
import { BackLink } from "@/shared/ui/BackLink";
import { useEffect } from "react";
import { MasterClassItems } from "@/shared/const/MasterClassItems";
import { NavLink } from "react-router-dom";

export const MasterClassesPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className={classNames(cls.MasterClassesPage, {}, [])}>
            <Header />
            <div className="container">
                <div>
                    <BackLink className={cls.backLink} to="/" text="Главная" />

                    <Text className={cls.h1} tagType="h1" textType="h1">
                        КУЛИНАРНЫЕ МАСТЕР КЛАССЫ <br /> В ADDIS FLAVORS
                    </Text>
                    <Text className={cls.h3} tagType="h3" textType="h3">
                        Расписание на апрель-май
                    </Text>
                    <div className={cls.itemsContainer}>
                        {MasterClassItems.map((masterClass) => (
                            <NavLink to={`/master-classes/${masterClass.id}`}>
                                <MasterClassCard
                                    date={masterClass.date}
                                    price={masterClass.price}
                                    title={masterClass.title}
                                    img={masterClass.img}
                                />
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
