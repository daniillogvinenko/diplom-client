import { classNames } from "@/shared/lib/classNames/classNames";
import { Header } from "@/widgets/Header";
import cls from "./MasterClassSignUpPage.module.scss";
import { Text } from "@/shared/ui/Text";
// import { useParams } from "react-router-dom";
import { Input } from "@/shared/ui/Input";
import { useState } from "react";
import { Button } from "@/shared/ui/Button";

export const MasterClassSignUpPage = () => {
    // const { id } = useParams();

    const [value, setValue] = useState("");

    return (
        <div className={classNames(cls.MasterClassSignUpPage, {}, [])}>
            <Header />
            <div className="container">
                <div style={{ paddingTop: 210 }}>
                    <Text tagType="h1" className={cls.title} textType="h1">
                        ЗАПИСАТЬСЯ НА МАСТЕР-КЛАСС
                    </Text>
                    <Text tagType="p" className={cls.paragraph} textType="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </Text>
                    <div className={cls.flex}>
                        <div>
                            <Text tagType="h3" className={cls.h3title} textType="h3">
                                Цена за персону
                            </Text>
                            <Text tagType="p" textType="text">
                                3500 Р.
                            </Text>
                            <Text tagType="h3" className={cls.h3title} textType="h3">
                                Дата
                            </Text>
                            <Text tagType="p" textType="text">
                                14.04 Суббота, 18:00 Р.
                            </Text>
                            <Text tagType="h3" className={cls.h3title} textType="h3">
                                Продолжительность
                            </Text>
                            <Text tagType="p" textType="text">
                                2 часа 30 минут
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
                                value={value}
                                onChange={setValue}
                            />
                            <Input
                                className={cls.input}
                                label="Количество гостей"
                                placeholder="Количество гостей"
                                value={value}
                                onChange={setValue}
                            />
                            <Input
                                className={cls.input}
                                label="Телефон"
                                placeholder="Телефон"
                                value={value}
                                onChange={setValue}
                            />
                            <Input
                                className={cls.input}
                                label="Пожелания к бронированию"
                                placeholder="Пожелания к бронированию"
                                value={value}
                                onChange={setValue}
                            />
                            <Button>Подтвердить</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
