import { classNames } from "@/shared/lib/classNames/classNames";
import { Header } from "@/widgets/Header";
import cls from "./MasterClassSignUpPage.module.scss";
import { Text } from "@/shared/ui/Text";
import { useParams } from "react-router-dom";
import { Input } from "@/shared/ui/Input";
import { useEffect, useState } from "react";
import { Button } from "@/shared/ui/Button";
import { BackLink } from "@/shared/ui/BackLink";
import { MasterClassItems } from "@/shared/const/MasterClassItems";

export const MasterClassSignUpPage = () => {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [phone, setPhone] = useState("");
    const [additional, setAdditional] = useState("");

    const item = MasterClassItems.find((masterClass) => masterClass.id === id);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className={classNames(cls.MasterClassSignUpPage, {}, [])}>
            <Header />
            <div className="container">
                <div>
                    <BackLink className={cls.backLink} to="/master-classes" text="Все мастер-классы" />
                    <Text tagType="h1" className={cls.title} textType="h1">
                        ЗАПИСАТЬСЯ НА МАСТЕР-КЛАСС
                    </Text>
                    <Text tagType="p" className={cls.paragraph} textType="text">
                        {item?.description}
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
                            <Text tagType="p" textType="text">
                                Блюдо 1
                            </Text>
                            <Text tagType="p" textType="text">
                                Блюдо 2
                            </Text>
                            <Text tagType="p" textType="text">
                                Блюдо 3
                            </Text>
                        </div>
                        <div>
                            <Input
                                className={cls.input}
                                label="Ваше имя"
                                placeholder="Ваше имя"
                                value={name}
                                onChange={setName}
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
                                value={phone}
                                onChange={setPhone}
                            />
                            <Input
                                className={cls.input}
                                label="Пожелания к бронированию"
                                placeholder="Пожелания к бронированию"
                                value={additional}
                                onChange={setAdditional}
                            />
                            <Button>Подтвердить</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
