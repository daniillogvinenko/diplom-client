import { MenuCard } from "@/entities/food";
import { getProfileData } from "@/features/editableProfileCard";
import { MenuItems } from "@/shared/const/MenuItems";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text";
import { useSelector } from "react-redux";
import cls from "./MenuList.module.scss";
import { BackLink } from "@/shared/ui/BackLink";
import { useRef, useState } from "react";
import { Tab } from "@/shared/ui/Tab";
import { menuCardHelper } from "@/shared/lib/menuFilters/menuFilters";

interface MenuListProps {
    className?: string;
    onOpenModal: (value: number) => void;
}

export const MenuList = (props: MenuListProps) => {
    const { className, onOpenModal } = props;
    const { cart } = useSelector(getProfileData);

    const ref1 = useRef<HTMLHeadingElement>(null);
    const ref2 = useRef<HTMLHeadingElement>(null);
    const ref3 = useRef<HTMLHeadingElement>(null);
    const ref4 = useRef<HTMLHeadingElement>(null);
    const ref5 = useRef<HTMLHeadingElement>(null);

    const refs = [ref1, ref2, ref3, ref4, ref5];

    const handleScroll1 = () => ref1.current?.scrollIntoView({ behavior: "smooth" });
    const handleScroll2 = () => ref2.current?.scrollIntoView({ behavior: "smooth" });
    const handleScroll3 = () => ref3.current?.scrollIntoView({ behavior: "smooth" });
    const handleScroll4 = () => ref4.current?.scrollIntoView({ behavior: "smooth" });
    const handleScroll5 = () => ref5.current?.scrollIntoView({ behavior: "smooth" });

    const [newTabSelected, setNewTabSelected] = useState(false);
    const [hitTabSelected, setHitTabSelected] = useState(false);
    const [spicyTabSelected, setSpicyTabSelected] = useState(false);

    return (
        <div className={classNames(cls.MenuList, {}, [className])}>
            <div className={cls.navigation}>
                <div className="container">
                    <div className={cls.navigatinWrapper}>
                        <Text pointer onClick={handleScroll1} color="white" textType="text" tagType="span">
                            Эфиопская кухня
                        </Text>
                        <Text pointer onClick={handleScroll2} color="white" textType="text" tagType="span">
                            Эфиопские напитки
                        </Text>
                        <Text pointer onClick={handleScroll3} color="white" textType="text" tagType="span">
                            Африканская кухня
                        </Text>
                        <Text pointer onClick={handleScroll4} color="white" textType="text" tagType="span">
                            Салаты
                        </Text>
                        <Text pointer onClick={handleScroll5} color="white" textType="text" tagType="span">
                            Напитки
                        </Text>
                    </div>
                </div>
            </div>
            <div className="container">
                <BackLink className={cls.backLink} text="Главная" to="/" />

                <div className={cls.tabWrapper}>
                    <Tab onClick={() => setNewTabSelected((prev) => !prev)} selected={newTabSelected}>
                        Новинки
                    </Tab>
                    <Tab onClick={() => setHitTabSelected((prev) => !prev)} selected={hitTabSelected}>
                        Хит
                    </Tab>
                    <Tab onClick={() => setSpicyTabSelected((prev) => !prev)} selected={spicyTabSelected}>
                        Острое
                    </Tab>
                </div>
                {MenuItems.map((section, i) => (
                    <div key={section.title}>
                        {/* отрисовываем заголовок только если в секции существует блюдо, подходящее под фильтры */}
                        {section.items.some((item) =>
                            menuCardHelper(newTabSelected, hitTabSelected, spicyTabSelected, item.tabs)
                        ) ? (
                            <Text
                                className={classNames(cls.sectionTitle, { [cls.firstSectionTitle]: i === 0 }, [])}
                                tagType="h2"
                                textType="h2"
                                ref={refs[i]}
                            >
                                {section.title}
                            </Text>
                        ) : null}
                        <div className={cls.cardsContainer}>
                            {section.items.map((item) => (
                                <>
                                    {/* отрисовываем карточку, только если блюдо подходит под фильтры */}
                                    {menuCardHelper(newTabSelected, hitTabSelected, spicyTabSelected, item.tabs) ? (
                                        <MenuCard
                                            id={String(item.id)}
                                            key={item.id}
                                            onClick={() => onOpenModal(item.id)}
                                            img={item.img}
                                            price={item.price}
                                            // если айди итема есть в массиве cart, то selected
                                            selected={Object.keys(cart).includes(String(item.id))}
                                            title={item.title}
                                            selectedAmount={+cart[item.id]}
                                        />
                                    ) : null}
                                </>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
